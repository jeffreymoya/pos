import { Epic } from 'redux-observable'
import { catchError, filter, mergeMapTo, tap, map } from 'rxjs/operators'
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
    tap(() => console.log('fetch items')),
    mergeMapTo(rxdb.getAllItems()),
    tap(items => console.log('dis items', items.length)),
    catchError((e: string) => of(error(e))),
    map(items => {
      console.log('fetch success1')
      console.log(items.length)
      return fetchSuccess(items)
    })
  )

export default itemEpic
