import {useFonts} from "expo-font";
import {useCallback} from "react";
import * as SplashScreen from "expo-splash-screen";

export const montserrat = 'Montserrat'
const useMontserratFont = () => {
    const [fontsLoaded] = useFonts({
        [montserrat]: require(`/assets/fonts/${montserrat}-Regular.ttf`),
        [`${montserrat}-Medium`]: require(`/assets/fonts/${montserrat}-Medium.ttf`),
        [`${montserrat}-Light`]: require(`/assets/fonts/${montserrat}-Light.ttf`),
        [`${montserrat}-Thin`]: require(`/assets/fonts/${montserrat}-Thin.ttf`),
    })
    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync()
        }
    }, [fontsLoaded])

    return [fontsLoaded, onLayoutRootView]
}

export default useMontserratFont