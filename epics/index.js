import { combineEpics } from 'redux-observable';

import orders from './orders';

export default combineEpics(orders);