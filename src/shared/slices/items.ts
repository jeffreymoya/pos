import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { createAction } from '@reduxjs/toolkit/src/createAction'

export const fetch = createAction('fetch')

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

const initialState: Array<Item> = []

const items = createSlice({
  name: 'items',
  initialState,
  reducers: {
    fetchSuccess: (state, action: PayloadAction<Array<Item>>) => [
      ...state,
      ...action.payload,
    ],
    error: (state, action: PayloadAction<string>) => ({
      error: true,
      errorMessage: action.payload,
      ...state,
    }),
  },
})

export const { fetchSuccess, error } = items.actions

export default items.reducer
