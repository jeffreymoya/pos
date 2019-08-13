import { error, fetch, fetchSuccess } from '../redux/items';
import { of } from 'rxjs/src/internal/observable/of';
import { combineEpics } from 'redux-observable';

const fetchItems = (action$, state$, { db }) =>
  action$.ofType(fetch.type).mergeMap(() => {
    db.get()
      .findAll()
      .then(items => fetchSuccess(items))
      .$.catchError(e => of(error(e)));
  });

export default combineEpics({
  fetchItems,
});
