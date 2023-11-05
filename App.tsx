import * as React from 'react'
import { NavigationBar } from './src/components/common/navigation/NavigationBar'
import useThemeFont from './src/core/hooks/useThemeFont'
import Providers from './src/Providers'
import { View } from 'react-native'

function Main() {
	const [isFontLoading, onLayoutRootView] = useThemeFont()

	if (isFontLoading) return null

	return (
		<View onLayout={onLayoutRootView}>
			<NavigationBar />
		</View>
	)
}

export default function App() {
	return (
		<Providers>
			<Main />
		</Providers>
	)
}
