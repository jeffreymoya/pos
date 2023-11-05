import * as React from 'react'
import {SafeAreaProvider} from "react-native-safe-area-context"
import light from "./theme/light"
import {NavigationBar} from "./components/core/navigation/NavigationBar"
import {configureFonts, MD3LightTheme, PaperProvider} from "react-native-paper"
import useMontserratFont, {montserrat} from "./components/core/hooks/useMontserratFont"

const theme = {
    ...MD3LightTheme,
    colors: light.config.colors,
    fonts: configureFonts({config: {fontFamily: montserrat}})
}
export default function App() {
    const [isLoaded, onLayoutRootView] = useMontserratFont()

    if (!isLoaded) return null

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <PaperProvider theme={theme}>
                <NavigationBar/>
            </PaperProvider>
        </SafeAreaProvider>
    )
}

