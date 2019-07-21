import { createReducer } from 'redux-starter-kit';

const orders = createReducer(
  {
    items: [],
  },
  {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {},
  }
);

export default orders;
