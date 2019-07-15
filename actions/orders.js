import {createAction} from "redux-starter-kit";


export const create = createAction('order/create');
export const add = createAction('order/add');
export const remove = createAction('order/remove');
export const complete = createAction('order/complete');
export const cancel = createAction('order/cancel');
