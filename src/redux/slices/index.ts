import { actions as discoverActions, DiscoverState, reducer as discoverReducer } from '@redux/slices/DiscoverSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const actions = {
	...discoverActions,
}
export const reducers = combineReducers({
	discover: discoverReducer,
})

export type RootState = {
	discover: DiscoverState
}
