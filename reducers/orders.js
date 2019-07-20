import { add, remove, update } from '../actions/orders';
import { createReducer } from 'redux-starter-kit';

const reducer = createReducer(
  {
    items: [],
  },
  {
    [update]: (state, action) => {
      return { ...state, ...action.payload };
    },
    [add]: (state, action) => {
      state.items.push(action.payload);
    },
    [remove]: (state, action) => {},
  }
);

export default reducer;
