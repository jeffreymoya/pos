import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { combineProviders } from '@components/common/utilities/combineProviders'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useColorScheme } from 'react-native'
import { themeConfig } from '@theme/index'

function ThemeProvider({ children }) {
	const scheme = useColorScheme()
	const theme = themeConfig(scheme)
	return <PaperProvider theme={theme}>{children}</PaperProvider>
}

function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>
}

export default ({ children }: { children: React.ReactNode }) =>
	combineProviders([ReduxProvider, ThemeProvider, SafeAreaProvider], children)
