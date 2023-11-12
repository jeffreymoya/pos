import React from 'react'
import { PaperProvider } from 'react-native-paper'
import { Provider } from 'react-redux'
import { store } from '@redux/store'
import { combineProviders } from '@components/common/utilities/combineProviders'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { themeConfig } from '@theme/index'

/**
 * TODO: store theme preference in redux
 * @param children
 * @constructor
 */
function ThemeProvider({ children }) {
	const theme = themeConfig('light')
	return <PaperProvider theme={theme}>{children}</PaperProvider>
}

function ReduxProvider({ children }) {
	return <Provider store={store}>{children}</Provider>
}

export default ({ children }: { children: React.ReactNode }) =>
	combineProviders([React.StrictMode, SafeAreaProvider, ThemeProvider, ReduxProvider], children)
