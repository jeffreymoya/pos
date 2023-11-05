import { configureFonts, MD3LightTheme, useTheme } from 'react-native-paper'
import colors from '@theme/colors'
import type { MD3Theme } from 'react-native-paper/src/types'

const fontName = 'Montserrat'
export const fontAssets = () => ({
	[fontName]: require(`/assets/fonts/${fontName}-Regular.ttf`),
	[`${fontName}-Medium`]: require(`/assets/fonts/${fontName}-Medium.ttf`),
	[`${fontName}-Light`]: require(`/assets/fonts/${fontName}-Light.ttf`),
	[`${fontName}-Thin`]: require(`/assets/fonts/${fontName}-Thin.ttf`),
})
export const themeConfig = (scheme: string) => ({
	...MD3LightTheme,
	colors: scheme === 'dark' ? colors.dark : colors.light,
	fonts: configureFonts({ config: { fontFamily: fontName } }),
})

export const useAppTheme = () => useTheme<MD3Theme>()
