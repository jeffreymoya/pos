module.exports = function (api) {
	api.cache(true)
	return {
		presets: ['babel-preset-expo'],
		plugins: [
			['@babel/plugin-transform-flow-strip-types'],
			['@babel/plugin-proposal-decorators', { legacy: true }],
			['@babel/plugin-proposal-class-properties', { loose: true }],
			['module:react-native-dotenv'],
			[
				'module-resolver',
				{
					alias: {
						'@components': './src/components',
						'@theme': './src/theme',
						'@redux': './src/redux',
					},
					extensions: ['.js', '.jsx', '.ts', '.tsx'],
				},
			],
		],
	}
}
