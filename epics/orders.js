import { add } from '../redux/orders';
import { of } from 'rxjs/src/internal/observable/of';

export const orderEpic = (action$, state$, { db }) =>
  action$
    .ofType(add.type)
    .mergeMap(() => {
      db.save(state$);
    })
    .catchError(error =>
      of({
        type: error.type,
        payload: error,
      })
    );

export default orderEpic;
