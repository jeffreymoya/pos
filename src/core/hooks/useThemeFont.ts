import { useFonts } from 'expo-font'
import { useCallback } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import type { LayoutChangeEvent } from 'react-native'
import { fontAssets } from '@theme/index'

const useThemeFont = (): [boolean, (e: LayoutChangeEvent) => void] => {
	const [fontsLoaded, fontError] = useFonts(fontAssets())
	const isFontLoading = !fontsLoaded && !fontError

	const onLayoutRootView = useCallback(
		async (_: LayoutChangeEvent) => {
			if (fontsLoaded) {
				await SplashScreen.hideAsync()
			}
		},
		[fontsLoaded, fontError],
	)

	return [isFontLoading, onLayoutRootView]
}

export default useThemeFont
