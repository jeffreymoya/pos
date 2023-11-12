import { createSelector, createSlice } from '@reduxjs/toolkit'
import { RootState } from '@redux/slices'

export type DiscoverState = {
	distanceSliderValue: number
	nearbyPlaces: google.maps.places.PlaceResult[]
	error?: string
}

const initialState: DiscoverState = {
	distanceSliderValue: 0,
	nearbyPlaces: [],
	error: undefined,
}

const fetchDiscover = (state: RootState) => state.discover

export const fetchSliderValue = createSelector(fetchDiscover, (discover: DiscoverState) => discover.distanceSliderValue)

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
