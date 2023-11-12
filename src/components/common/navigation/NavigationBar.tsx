import { NavigationContainer } from '@react-navigation/native'
import { DiscoverScreen } from '@components/discover/DiscoverScreen'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import * as React from 'react'
import { useCallback } from 'react'
import { createMaterialBottomTabNavigator } from 'react-native-paper/react-navigation'
import { SearchScreen } from '@components/search/SearchScreen'
import { FavoritesScreen } from '@components/favorites/FavoritesScreen'

const Tab = createMaterialBottomTabNavigator()

export function NavigationBar() {
	const useIcon = useCallback(
		({ name }) =>
			({ color }) => <MaterialCommunityIcons name={name} color={color} size={26} />,
		[],
	)
	return (
		<NavigationContainer fallback={<div>Something went wrong</div>}>
			<Tab.Navigator initialRouteName="Discover">
				<Tab.Screen
					name="Discover"
					component={DiscoverScreen}
					options={{
						tabBarLabel: 'Discover',
						tabBarIcon: useIcon({ name: 'near-me' }),
					}}
				/>
				<Tab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarLabel: 'Search',
						tabBarIcon: useIcon({ name: 'map-search' }),
					}}
				/>
				<Tab.Screen
					name="Favorites"
					component={FavoritesScreen}
					options={{
						tabBarLabel: 'Favorites',
						tabBarIcon: useIcon({ name: 'heart' }),
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
