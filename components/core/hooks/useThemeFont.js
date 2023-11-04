import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";
import light from "../../../theme/light";

const useThemeFont = () => {
    const [fontsLoaded] = useFonts(light.font());
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    return [fontsLoaded, onLayoutRootView]
};

export default useThemeFont;