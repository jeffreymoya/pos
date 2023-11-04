import * as React from 'react';
import {SafeAreaProvider} from "react-native-safe-area-context";
import light from "./theme/light";
import {NavigationBar} from "./components/core/navigation/NavigationBar";
import {configureFonts, MD3LightTheme, PaperProvider} from "react-native-paper";
import useThemeFont from "./components/core/hooks/useThemeFont";
import {fontConfigMontserrat} from "./theme/fonts";

const theme = {
    ...MD3LightTheme,
    colors: light.config.colors,
    fonts: configureFonts({config: fontConfigMontserrat})
};
export default function App() {
    const [fontsLoaded, onLayoutRootView] = useThemeFont()

    if (!fontsLoaded) return null;

    return (
        <SafeAreaProvider onLayout={onLayoutRootView}>
            <PaperProvider theme={theme}>
                <NavigationBar/>
            </PaperProvider>
        </SafeAreaProvider>
    );
}

