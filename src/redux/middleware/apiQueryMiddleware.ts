import { Dispatch, MiddlewareAPI } from '@reduxjs/toolkit'
import { AnyAction } from 'redux'
import { GOOGLE_MAPS_API_KEY } from '@env'
import googleMapsApi from '@redux/api/google'
import { RootState } from '@redux/slices'

export const apiQueryMiddleware =
	(_: MiddlewareAPI<Dispatch, RootState>) => (next: Dispatch) => (action: AnyAction) => {
		if (action.type.startsWith(googleMapsApi.reducerPath)) {
			action.payload.prepareQuery({ API_KEY: GOOGLE_MAPS_API_KEY })
		}

		return next(action)
	}
