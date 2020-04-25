import { error, fetch, fetchSuccess, Item } from '../redux/items'
import { of } from 'rxjs/src/internal/observable/of'
import { filter, mergeMap } from 'rxjs/operators'
import { RootState } from '../redux'
import { Epic } from 'redux-observable'
import { ActionType } from 'typesafe-actions'

type FetchAction = ActionType<typeof fetch>

const itemEpic: Epic<FetchAction, any, RootState> = (action$, state$, { db }) =>
  action$.pipe(
    filter(fetch.match),
    mergeMap(() => {
      console.log('fetching items..')
      return db
        .get()
        .findAll()
        .then((items: Array<Item>) => fetchSuccess(items))
        .$.catchError((e: string) => of(error(e)))
    })
  )

export default itemEpic
