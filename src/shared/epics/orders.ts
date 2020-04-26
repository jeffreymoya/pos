import {
  add,
  error,
  fetch,
  fetchSuccess,
  sync,
  syncSuccess,
  Order,
  OrderAction,
} from '../slices/orders'
import { of } from 'rxjs/src/internal/observable/of'
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb'
import { filter, mergeMap, mapTo } from 'rxjs/operators'
import { Epic } from 'redux-observable'
import { RootState } from '../slices'
import { isOfType } from 'typesafe-actions'

const insertOrder: Epic<OrderAction, OrderAction, RootState> = (
  action$,
  state$,
  { db }
) =>
  action$.pipe(
    filter(isOfType(add.type)),
    mergeMap(() =>
      db
        .get()
        .orders.insert(state$)
        .$.catchError((e: string) => of(error(e)))
    ),
    mapTo(sync())
  )

//FIXME: do not use `any`
const fetchOrder: Epic<OrderAction, any, RootState> = (
  action$,
  state$,
  { db }
) =>
  action$.pipe(
    filter(isOfType(fetch.type)),
    mergeMap(() =>
      db
        .get()
        .orders.find(state$)
        .exec()
        .then((orders: Array<Order>) => fetchSuccess(orders))
        .$.catchError((e: string) => of(error(e)))
    )
  )

const syncOrder: Epic<OrderAction, OrderAction, RootState> = (
  action$,
  state$,
  { db }
) =>
  action$.pipe(
    filter(sync.match),
    mergeMap(() =>
      db
        .get()
        .orders.sync(DATABASE_REMOTE_SERVER)
        .complete$.subscribe(syncSuccess())
        .$.catchError((e: string) => of(error(e)))
    ),
    mapTo(sync())
  )

export { insertOrder, fetchOrder, syncOrder }
