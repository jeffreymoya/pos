import { offlineActionTypes } from 'react-native-offline';
import { Observable } from 'rxjs';

export const syncEpic = (action$, $state, { db }) =>
  action$
    .ofType(offlineActionTypes.CONNECTION_CHANGE)
    .filter(() => $state.network.isConnected)
    .mergeMap(() => {
      Observable.of(db.sync('remote db url'));
    });

export default syncEpic;
