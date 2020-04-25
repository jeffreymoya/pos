import {
  add,
  error,
  fetch,
  fetchSuccess,
  sync,
  syncSuccess,
  Order,
} from '../redux/orders'
import { of } from 'rxjs/src/internal/observable/of'
import { DATABASE_REMOTE_SERVER } from '../constants/rxdb'
import { filter, mergeMap, mapTo } from 'rxjs/operators'
import { Epic } from 'redux-observable'
import { RootState } from '../redux'
import { isOfType, ActionType } from 'typesafe-actions'

type AddAction = ActionType<typeof add>

const insertOrder: Epic<AddAction, AddAction, RootState> = (
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

type FetchAction = ActionType<typeof fetch>

const fetchOrder: Epic<FetchAction, any, RootState> = (
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

type SyncAction = ActionType<typeof sync>

const syncOrder: Epic<SyncAction, SyncAction, RootState> = (
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
