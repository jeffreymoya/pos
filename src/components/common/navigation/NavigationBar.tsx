import { NavigationContainer } from "@react-navigation/native";
import { DiscoverScreen } from "@components/discover/DiscoverScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as React from "react";
import { createMaterialBottomTabNavigator } from "react-native-paper/react-navigation";
import { SearchScreen } from '"@components/search/SearchScreen";import { FavoritesScreen } from '"@components/favorites/FavoritesScreen";

const Tab = createMaterialBottomTabNavigator()

export function NavigationBar() {
	return (
		<NavigationContainer fallback={<div>Something went wrong</div>}>
			<Tab.Navigator initialRouteName="Home">
				<Tab.Screen
					name="Discover"
					component={DiscoverScreen}
					options={{
						tabBarLabel: 'Discover',
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name="near-me" color={color} size={26} />,
					}}
				/>
				<Tab.Screen
					name="Search"
					component={SearchScreen}
					options={{
						tabBarLabel: 'Search',
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name="map-search" color={color} size={26} />,
					}}
				/>
				<Tab.Screen
					name="Favorites"
					component={FavoritesScreen}
					options={{
						tabBarLabel: 'Favorites',
						tabBarIcon: ({ color }) => <MaterialCommunityIcons name="heart" color={color} size={26} />,
					}}
				/>
			</Tab.Navigator>
		</NavigationContainer>
	)
}
