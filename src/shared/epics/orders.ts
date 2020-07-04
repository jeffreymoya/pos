import { Epic } from 'redux-observable'
import {
  filter,
  mapTo,
  mergeMap,
  tap,
  mergeMapTo,
  map,
  catchError,
} from 'rxjs/operators'
import { of } from 'rxjs/src/internal/observable/of'
import { isOfType } from 'typesafe-actions'
import { RootState } from '../slices'
import {
  add,
  error,
  fetch,
  fetchSuccess,
  Order,
  OrderAction,
  sync,
  syncSuccess,
} from '../slices/orders'

const insertOrder: Epic<OrderAction, OrderAction, RootState> = (
  action$,
  state$,
  { rxdb }
) =>
  action$.pipe(
    filter(isOfType(add.type)),
    mergeMap(() => rxdb.insertOrder(state$)),
    mapTo(sync())
  )

const fetchOrder: Epic<OrderAction, OrderAction, RootState> = (
  action$,
  state$,
  { rxdb }
) =>
  action$.pipe(
    filter(isOfType(fetch.type)),
    tap(() => console.log('fetch orders')),
    mergeMapTo(() =>
      rxdb.findAllOrders().pipe(
        map((orders: Array<Order>) => fetchSuccess(orders)),
        catchError((e: string) => of(error(e)))
      )
    )
  )

const syncOrder: Epic<OrderAction, OrderAction, RootState> = (
  action$,
  state$,
  { rxdb }
) =>
  action$.pipe(
    filter(isOfType(sync.type)),
    mergeMap(() =>
      rxdb
        .syncOrder()
        .complete$.subscribe(syncSuccess())
        .$.catchError((e: string) => of(error(e)))
    ),
    mapTo(sync())
  )

export { insertOrder, fetchOrder, syncOrder }
