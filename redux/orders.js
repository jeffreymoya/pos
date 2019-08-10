import { createSlice } from 'redux-starter-kit';

const orders = createSlice({
  slice: 'orders',
  initialState: {
    items: [],
  },
  reducers: {
    update: (state, action) => {
      return { ...state, ...action.payload };
    },
    add: (state, action) => {
      state.items.push(action.payload);
    },
    remove: (state, action) => {},
    error: (state, action) => {},
  },
});

export const { add, update, remove, error } = orders.actions;

export default orders;
