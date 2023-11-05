module.exports = {
	parser: '@typescript-eslint/parser',
	parserOptions: {
		sourceType: 'module',
		project: './tsconfig.json',
	},
	extends: ['airbnb', 'plugin:@typescript-eslint/recommended', 'plugin:prettier/recommended', 'prettier'],
}
