import { error, fetch, fetchSuccess } from '../redux/items';
import { of } from 'rxjs/src/internal/observable/of';
import { filter, mergeMap } from 'rxjs/operators';

export default (action$, state$, { db }) =>
  action$.pipe(
    filter(fetch.match),
    mergeMap(() => {
      console.log('fetching items..');
      return db
        .get()
        .findAll()
        .then(items => fetchSuccess(items))
        .$.catchError(e => of(error(e)));
    })
  );
