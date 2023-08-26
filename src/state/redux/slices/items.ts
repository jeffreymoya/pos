import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit/src/createAction'
import { ActionType } from 'typesafe-actions'

export interface Item {
  code: string
  name: string
  quantity: number
  description?: string
  categoryCode: string
  variations: string
  price: number
  branchCode?: string
  createdBy: string
  createdDate: string
  attachments?: string
}

export interface Items {
  data: Array<Item>
}

const initialState: Items = {
  data: [],
}

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<Array<Item>>) => {
      state.data = action.payload
    },
    error: (state, action: PayloadAction<string>) => ({
      error: true,
      errorMessage: action.payload,
      ...state,
    }),
  },
})

const actions = {
  ...items.actions,
  fetch: createAction<Item, 'fetchItems'>('fetchItems'),
}

export const { error, fetchSuccess, fetch } = actions

export type ItemAction = ActionType<typeof actions>

export default items.reducer
