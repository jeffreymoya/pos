import { update } from '../actions/orders';

export const orderEpic = (action$, store, { db }) =>
  action$.ofType(update.type).mergeMap(() => {
    // db
  });

export default orderEpic;
