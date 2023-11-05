import * as React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationBar } from './src/components/core/navigation/NavigationBar'
import { PaperProvider } from 'react-native-paper'
import useMontserratFont from './src/components/core/hooks/useMontserratFont'
import { theme } from '@theme/light'

export default function App() {
	const [isLoaded, onLayoutRootView] = useMontserratFont()

	if (!isLoaded) return null

	return (
		<SafeAreaProvider onLayout={onLayoutRootView}>
			<PaperProvider theme={theme}>
				<NavigationBar />
			</PaperProvider>
		</SafeAreaProvider>
	)
}
