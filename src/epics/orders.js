import {
  add,
  error,
  fetch,
  fetchSuccess,
  sync,
  syncSuccess,
} from '../redux/orders';
import { of } from 'rxjs/src/internal/observable/of';
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb';
import { filter, mergeMap, mapTo } from 'rxjs/operators';

const insertOrder = (action$, state$, { db }) =>
  action$.pipe(
    filter(add.match),
    mergeMap(() => {
      db.get()
        .orders.insert(state$)
        .$.catchError(e => of(error(e)));
    }),
    mapTo(sync())
  );

const fetchOrder = (action$, state$, { db }) =>
  action$.pipe(
    filter(fetch.match),
    mergeMap(() => {
      if (db == null) {
        console.error(`db is null ${db}`);
      }
      return db
        .get()
        .orders.find(state$)
        .exec()
        .then(orders => fetchSuccess(orders))
        .$.catchError(e => of(error(e)));
    })
  );

const syncOrder = (action$, state$, { db }) =>
  action$.pipe(
    filter(sync.match),
    mergeMap(() => {
      db.get()
        .orders.sync(DATABASE_REMOTE_SERVER)
        .complete$.subscribe(syncSuccess())
        .$.catchError(e => of(error(e)));
    }),
    mapTo(sync())
  );

export { insertOrder, fetchOrder, syncOrder };
