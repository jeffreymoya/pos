import { offlineActionTypes } from 'react-native-offline'
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb'
import toast from '../utilities/toast'

import { filter, mergeMap, tap, catchError } from 'rxjs/operators'
import { ofType, Epic } from 'redux-observable'

type Action = typeof offlineActionTypes

type NetworkState = {
  isConnected: boolean
  actionQueue: Array<Action>
}

const syncEpic: Epic<Action, Action, NetworkState> = (
  action$,
  $state,
  { db }
) =>
  action$.pipe(
    ofType(offlineActionTypes.CONNECTION_CHANGE),
    filter(() => $state.value.isConnected),
    tap(() => toast('Syncing..')),
    mergeMap(() => db.get().orders.sync(DATABASE_REMOTE_SERVER)),
    catchError(e => toast(e))
  )

export default syncEpic
