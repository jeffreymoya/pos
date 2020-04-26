import { createAction, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Item } from './items'
import { ActionType } from 'typesafe-actions'

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

const actions = {
  ...orders.actions,
  fetch: createAction<Order, 'fetch'>('fetch'),
  sync: createAction<Order, 'sync'>('sync'),
  syncSuccess: createAction<Order, 'syncSuccess'>('syncSuccess'),
}

export const {
  add,
  update,
  remove,
  error,
  fetchSuccess,
  fetch,
  sync,
  syncSuccess,
} = actions

export type OrderAction = ActionType<typeof actions>

export default orders.reducer
