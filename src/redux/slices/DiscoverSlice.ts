import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "@redux/slices";

export type DiscoverResult = {
	id: string
	title: string
	count: number
	icon: string
	description: string
}

export type DiscoverState = {
	distanceSliderValue: number
	nearbyPlaces: DiscoverResult[]
	error?: string
}
const initialState: DiscoverState = {
	distanceSliderValue: 0,
	nearbyPlaces: [
		{ id: '1', title: 'Item 1', count: 5, icon: 'facebook', description: 'This is item 1' },
		{ id: '2', title: 'Item 2', count: 10, icon: 'waze', description: 'This is item 2' },
		{ id: '3', title: 'Item 3', count: 2, icon: 'google-maps', description: 'This is item 3' },
		// Add more data items as needed
	],
	error: undefined,
}

const fetchDiscover = (state: RootState) => state.discover

export const selectSliderValue = createSelector(fetchDiscover, (discover: DiscoverState) => discover.distanceSliderValue)
export const selectResults = createSelector(fetchDiscover, (discover: DiscoverState) => discover.nearbyPlaces)

const discoverSlice = createSlice({
	name: 'discover',
	initialState: initialState,
	reducers: {
		setDistanceSliderValue: (state, { payload }) => {
			state.distanceSliderValue = payload
		},
		setNearbyPlaces: (state, { payload }) => {
			state.nearbyPlaces = payload
		},
		setError: (state, { payload }) => {
			state.error = payload
		},
	},
})

export const { actions, reducer } = discoverSlice
export const { setDistanceSliderValue, setNearbyPlaces, setError } = actions
