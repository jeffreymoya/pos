import { offlineActionTypes } from 'react-native-offline';
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb';
import toast from '../utilities/toast';

export const syncEpic = (action$, state$, { db }) =>
  action$
    .ofType(offlineActionTypes.CONNECTION_CHANGE)
    .filter(() => state$.network.isConnected)
    .tap(() => toast('Syncing..'))
    .mergeMap(() => {
      db.get().orders.sync(DATABASE_REMOTE_SERVER);
    })
    .catchError(e => toast(e));

export default syncEpic;
