import {add} from "../actions/orders";

export const orderEpic = (action$, store, { db }) =>
    action$
        .ofType(add.type)
        .mergeMap(() => {
            // db
        }
);

export default orderEpic;