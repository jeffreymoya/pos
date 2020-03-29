import { createSlice } from '@reduxjs/toolkit';
import { createAction } from '@reduxjs/toolkit/src/createAction';

export const fetch = createAction('fetch');

const items = createSlice({
  name: 'items',
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
