import { combineEpics } from 'redux-observable'

import { fetchOrder, insertOrder, syncOrder } from './orders'
import sync from './sync'
import items from './items'

export default combineEpics(fetchOrder, syncOrder, insertOrder, sync, items)
