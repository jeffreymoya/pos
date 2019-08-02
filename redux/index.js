import { combineReducers } from 'redux';
import orderReducer from './orders';
import { reducer as network } from 'react-native-offline';

export default combineReducers({
  orderReducer,
  network,
});
