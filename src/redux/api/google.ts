import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { querystr } from "@core/helpers";

const baseUrl = 'https://maps.googleapis.com/maps/api/'

const googleMapsApi = createApi({
	reducerPath: 'googleMapsApi',
	baseQuery: fetchBaseQuery({ baseUrl }),
	endpoints: (builder) => ({
		getNearbyPlaces: builder.query<google.maps.places.PlaceResult, google.maps.places.PlaceSearchRequest>({
			query: (params: google.maps.places.PlaceSearchRequest) => `place/nearbysearch/json?${querystr(params)})}`,
		}),
	}),
})
export default googleMapsApi
