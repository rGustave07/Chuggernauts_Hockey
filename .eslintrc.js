const path = require('path');

module.exports = {
	env: {
		browser: true,
		es2021: true,
		jest: true,
	},
	extends: [
		'plugin:react/recommended',
		'google',
		'plugin:react/jsx-runtime',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		tsconfigRootDir: path.resolve('./'),
		ecmaVersion: 'latest',
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'jest'],
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'quote-props': 'off',
		quotes: 1,
		'object-curly-spacing': 0,
	},
};
