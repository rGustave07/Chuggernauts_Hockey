module.exports = {
	parser: '@typescript-eslint/parser',
	plugins: ['react', 'jest', '@typescript-eslint'],
	env: {
		browser: true,
		es2021: true,
		jest: true,
		node: true,
		commonjs: true,
	},
	root: true,
	settings: {
		react: {
			version: 'detect',
		},
	},
	extends: [
		'plugin:react/recommended',
		'google',
		'plugin:react/jsx-runtime',
		'plugin:@typescript-eslint/recommended',
		'plugin:@typescript-eslint/recommended-requiring-type-checking',
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 'latest',
		sourceType: 'module',
		project: ['./tsconfig.json'],
		tsconfigRootDir: __dirname,
	},
	rules: {
		indent: ['error', 'tab'],
		'no-tabs': 'off',
		'quote-props': 'off',
		quotes: 1,
		'object-curly-spacing': 0,
	},
};
