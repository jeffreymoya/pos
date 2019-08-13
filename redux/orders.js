import { createAction, createSlice } from 'redux-starter-kit';

export const fetchRequest = createAction('fetchRequest');
export const sync = createAction('sync');
export const syncSuccess = createAction('syncSuccess');

const orders = createSlice({
  slice: 'orders',
  initialState: {
    error: false,
    errorMessage: '',
    items: [],
  },
  reducers: {
    update: (state, action) => ({ ...state, ...action.payload }),
    add: (state, action) => state.items.push(action.payload),
    remove: (state, action) =>
      state.filter(order => order.id !== action.payload.id),
    error: (state, action) => ({
      error: true,
      errorMessage: action.payload,
      ...state,
    }),
    fetchSuccess: (state, action) =>
      (state.items = [...state.items, ...action.payload]),
  },
});

export const { add, update, remove, error, fetchSuccess } = orders.actions;

export default orders;
