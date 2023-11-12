import * as React from 'react'
import { NavigationBar } from '@components/common/navigation/NavigationBar'
import useThemeFont from './src/core/hooks/useThemeFont'
import Providers from './src/Providers'

function Main() {
	const [isFontLoading] = useThemeFont()

	if (isFontLoading) return null

	return <NavigationBar />
}

export default function App() {
	return (
		<Providers>
			<Main />
		</Providers>
	)
}
