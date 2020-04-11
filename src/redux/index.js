import { combineReducers } from 'redux';
import orderReducer from './orders';
import itemReducer from './items';
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  orderReducer,
  itemReducer,
  network,
});
