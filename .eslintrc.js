module.exports = {
	parser: "@typescript-eslint/parser",
	plugins: ["prettier", "react", "jest", "@typescript-eslint"],
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
			version: "detect",
		},
	},
	extends: [
		"plugin:prettier/recommended",
		"plugin:react/recommended",
		"google",
		"plugin:react/jsx-runtime",
		"plugin:@typescript-eslint/recommended",
		"plugin:@typescript-eslint/recommended-requiring-type-checking",
	],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: "latest",
		sourceType: "module",
		project: ["./tsconfig.json"],
		tsconfigRootDir: __dirname,
	},
	rules: {
		"prettier/prettier": "error",
		"require-jsdoc": 0,
		indent: ["error", "tab", { SwitchCase: 1 }],
		"no-tabs": "off",
		"quote-props": "off",
		quotes: ["warn", "double"],
		"object-curly-spacing": 0,
		"comma-dangle": 0,
		"max-len": ["error", { code: 120 }],
		"operator-linebreak": 0,
	},
};
