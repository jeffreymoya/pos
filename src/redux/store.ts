import { configureStore } from '@reduxjs/toolkit'
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import { listenerMiddleware } from '@redux/listeners'
import { createEpicMiddleware } from 'redux-observable'
import API from './api'
import { actions, reducers, RootState } from '@redux/slices'
import { ActionType } from 'typesafe-actions'

export type ActionsType = ActionType<typeof actions>

const epicMiddleware = createEpicMiddleware<ActionsType, ActionsType, RootState>({
	dependencies: API,
})
export const store = configureStore({
	reducer: reducers,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([listenerMiddleware.middleware, epicMiddleware]),
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
