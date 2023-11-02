import * as React from 'react';
import {useCallback} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from 'react-native-paper/react-navigation';
import {DiscoverScreen} from "./components/discover/DiscoverScreen";
import {SearchScreen} from "./components/search/SearchScreen";
import {FavoritesScreen} from "./components/favorites/FavoritesScreen";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useFonts} from "expo-font";
import * as SplashScreen from 'expo-splash-screen';
import {MaterialCommunityIcons} from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    const [fontsLoaded] = useFonts({
        'Montserrat': require('./assets/fonts/Montserrat-VariableFont.ttf'),
    });
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <SafeAreaProvider onLayout={onLayoutRootView} style={{fontFamily: 'Montserrat'}}>
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
        </SafeAreaProvider>
    );
}

