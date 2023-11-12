import { Epic, ofType } from 'redux-observable'
import { catchError, exhaustMap, map } from 'rxjs/operators'
import { actions, setDistanceSliderValue } from '@redux/slices/DiscoverSlice'
import { ActionType } from 'typesafe-actions'
import { from, of } from 'rxjs'
import { RootState } from '@redux/slices'
import API from '@redux/api'
import PlaceSearchRequest = google.maps.places.PlaceSearchRequest

type ActionsType = ActionType<typeof actions>

const discoverEpic: Epic<ActionsType, ActionsType, RootState, typeof API> = (action$, _, { useGetNearbyPlacesQuery }) =>
	action$.pipe(
		ofType(setDistanceSliderValue.type),
		exhaustMap((action) =>
			from(useGetNearbyPlacesQuery({ distance: action.payload.distance } as PlaceSearchRequest)).pipe(
				map(actions.setNearbyPlaces),
				catchError((error) => of(actions.setError(error))),
			),
		),
	)

export default discoverEpic
