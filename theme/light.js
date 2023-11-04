const light = {
    config: {
        "colors": {
            "primary": "#2c3e50",
            "onPrimary": "rgb(255, 255, 255)",
            "primaryContainer": "rgb(238,244,250)",
            "onPrimaryContainer": "rgb(0, 29, 51)",
            "secondary": "rgb(0, 100, 146)",
            "onSecondary": "rgb(255, 255, 255)",
            "secondaryContainer": "rgb(255,255,255)",
            "onSecondaryContainer": "rgb(0, 30, 47)",
            "tertiary": "rgb(0, 103, 131)",
            "onTertiary": "rgb(255, 255, 255)",
            "tertiaryContainer": "rgb(188, 233, 255)",
            "onTertiaryContainer": "rgb(0, 31, 42)",
            "error": "rgb(186, 26, 26)",
            "onError": "rgb(255, 255, 255)",
            "errorContainer": "rgb(255, 218, 214)",
            "onErrorContainer": "rgb(65, 0, 2)",
            "background": "rgb(252, 252, 255)",
            "onBackground": "rgb(26, 28, 30)",
            "surface": "rgba(255,255,255,0)",
            "onSurface": "rgb(26, 28, 30)",
            "surfaceVariant": "rgb(222, 227, 235)",
            "onSurfaceVariant": "rgb(66, 71, 78)",
            "outline": "rgb(114, 119, 127)",
            "outlineVariant": "rgb(194, 199, 207)",
            "shadow": "#334455",
            "scrim": "rgb(0, 0, 0)",
            "inverseSurface": "rgb(47, 48, 51)",
            "inverseOnSurface": "rgb(241, 240, 244)",
            "inversePrimary": "rgb(152, 203, 255)",
            "elevation": {
                "level0": "transparent",
                "level1": "rgb(239, 244, 250)",
                "level2": "#eff0f1",
                "level3": "rgb(224, 235, 244)",
                "level4": "rgb(222, 234, 243)",
                "level5": "rgb(217, 231, 241)"
            },
            "surfaceDisabled": "rgba(26, 28, 30, 0.12)",
            "onSurfaceDisabled": "rgba(26, 28, 30, 0.38)",
            "backdrop": "rgba(44, 49, 55, 0.4)"
        }
    },
    font: () => ({
        'Montserrat': require('/assets/fonts/Montserrat-VariableFont.ttf')
    })
}

export default light;