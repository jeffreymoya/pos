import { add, error } from '../redux/orders';
import { of } from 'rxjs/src/internal/observable/of';

export const orderEpic = (action$, state$, { db }) =>
  action$.ofType(add.type).mergeMap(() => {
    db.get()
      .orders.insert(state$)
      .$.catchError(e => of(error(e)));
  });

export default orderEpic;
