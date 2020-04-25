import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from './items'

export const fetch = createAction<Order, 'fetch'>('fetch')
export const sync = createAction<Order, 'sync'>('sync')
export const syncSuccess = createAction<Order, 'syncSuccess'>('syncSuccess')

export interface Order {
  id: string
  error: boolean
  errorMessage?: string
  items: Array<Item>
}

const initialState: Array<Order> = []

const removeOrder = (state: Array<Order>, id: string) =>
  state.filter(order => order.id !== id)

const orders = createSlice({
  name: 'orders',
  initialState,
  reducers: {
    update: (state, { payload }: PayloadAction<Order>) => {
      removeOrder(state, payload.id)
      state.push(payload)
    },
    add: (state, { payload }: PayloadAction<Order>) => {
      state.push(payload)
    },
    remove: (state, { payload }: PayloadAction<Order>) =>
      removeOrder(state, payload.id),
    error: (state, { payload }: PayloadAction<string>) => ({
      error: true,
      errorMessage: payload,
      ...state,
    }),
    fetchSuccess: (state, { payload }) => (state = [...state, ...payload]),
  },
})

export const { add, update, remove, error, fetchSuccess } = orders.actions

export default orders.reducer
