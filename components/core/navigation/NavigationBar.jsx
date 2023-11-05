import {NavigationContainer} from "@react-navigation/native";
import {DiscoverScreen} from "../../discover/DiscoverScreen";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import {SearchScreen} from "../../search/SearchScreen";
import {FavoritesScreen} from "../../favorites/FavoritesScreen";
import * as React from "react";
import {createMaterialBottomTabNavigator} from "react-native-paper/react-navigation";

const Tab = createMaterialBottomTabNavigator()

export function NavigationBar() {
    return (
        <NavigationContainer fallback={<div>Something went wrong</div>}>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Discover" component={DiscoverScreen} options={{
                    tabBarLabel: 'Discover',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="near-me" color={color} size={26}/>
                    ),
                }}/>
                <Tab.Screen name="Search" component={SearchScreen} options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="map-search" color={color} size={26}/>
                    ),
                }}/>
                <Tab.Screen name="Favorites" component={FavoritesScreen} options={{
                    tabBarLabel: 'Favorites',
                    tabBarIcon: ({color}) => (
                        <MaterialCommunityIcons name="heart" color={color} size={26}/>
                    ),
                }}/>
            </Tab.Navigator>
        </NavigationContainer>
    )
}
