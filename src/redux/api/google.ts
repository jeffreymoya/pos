import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { querystr } from '../../core/helpers'
import PlaceResult = google.maps.places.PlaceResult
import PlaceSearchRequest = google.maps.places.PlaceSearchRequest

const baseUrl = 'https://maps.googleapis.com/maps/api/'
const googleMapsApi = createApi({
	reducerPath: 'googleMapsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getNearbyPlaces: builder.query<PlaceResult, PlaceSearchRequest>({
			query: (params: PlaceSearchRequest) => `place/nearbysearch/json?${querystr(params)})}`,
		}),
	}),
})
export default googleMapsApi
