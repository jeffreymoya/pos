import { offlineActionTypes } from 'react-native-offline';

export const syncEpic = (action$, state$, { db }) =>
  action$
    .ofType(offlineActionTypes.CONNECTION_CHANGE)
    .filter(() => state$.network.isConnected)
    .mergeMap(() => {
      db.sync('remote db url');
    });

export default syncEpic;
