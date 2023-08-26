import { Epic } from 'redux-observable'
import { catchError, filter, map, mergeMapTo } from 'rxjs/operators'
import { of } from 'rxjs/src/internal/observable/of'
import { isOfType } from 'typesafe-actions'
import { RootState } from '../slices'
import { error, fetch, fetchSuccess, ItemAction } from '../slices/items'

const itemEpic: Epic<ItemAction, any, RootState> = (
  action$,
  state$,
  { rxdb }
) =>
  action$.pipe(
    filter(isOfType(fetch.type)),
    mergeMapTo(rxdb.getAllItems()),
    catchError((e: string) => of(error(e))),
    map((items) => {
      return fetchSuccess(items)
    })
  )

export default itemEpic
