import { add, error, fetchRequest, fetchSuccess, sync, syncSuccess } from '../redux/orders';
import { of } from 'rxjs/src/internal/observable/of';
import { combineEpics } from 'redux-observable';
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb';

const insertOrder = (action$, state$, { db }) =>
  action$
    .ofType(add.type)
    .mergeMap(() => {
      db.get()
        .orders.insert(state$)
        .$.catchError(e => of(error(e)));
    })
    .mapTo(sync());

const fetchOrder = (action$, state$, { db }) =>
  action$.ofType(fetchRequest.type).mergeMap(() => {
    db.get()
      .orders.find(state$)
      .exec()
      .then(orders => fetchSuccess(orders))
      .$.catchError(e => of(error(e)));
  });

const syncOrder = (action$, state$, { db }) =>
  action$
    .ofType(sync.type)
    .mergeMap(() => {
      db.get()
        .orders.sync(DATABASE_REMOTE_SERVER)
        .complete$.subscribe(syncSuccess())
        .$.catchError(e => of(error(e)));
    })
    .mapTo(sync());

export default combineEpics({
  insertOrder,
  fetchOrder,
  syncOrder,
});
