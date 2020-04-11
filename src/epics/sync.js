import { offlineActionTypes } from 'react-native-offline';
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb';
import toast from '../utilities/toast';

import { filter, mergeMap, tap, catchError } from 'rxjs/operators';
import { ofType } from 'redux-observable';

export default (action$, state$, { db }) =>
  action$.pipe(
    ofType(offlineActionTypes.CONNECTION_CHANGE),
    filter(() => state$.network.isConnected),
    tap(() => toast('Syncing..')),
    mergeMap(() => {
      db.get().orders.sync(DATABASE_REMOTE_SERVER);
    }),
    catchError(e => toast(e))
  );
