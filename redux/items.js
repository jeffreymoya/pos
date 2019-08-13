import { createSlice } from 'redux-starter-kit';
import { createAction } from 'redux-starter-kit/src/createAction';

export const fetch = createAction('fetch');

const items = createSlice({
  slice: 'items',
  initialState: {
    error: false,
    errorMessage: '',
  },
  reducers: {
    fetchSuccess: (state, action) => ({ ...state, ...action.payload }),
    error: (state, action) => ({
      error: true,
      errorMessage: action.payload,
      ...state,
    }),
  },
});

export const { fetchSuccess } = items.actions;

export default items;
