/* eslint-disable max-len */
module.exports = {
	roots: ['<rootDir>/src'],
	preset: 'ts-jest',
	verbose: true,
	testEnvironment: 'jsdom',
	transform: {
		'\\.[jt]sx?$': 'babel-jest',
	},
	testPathIgnorePatterns: ['/node_modules/', '/dist/'],
	testMatch: ['<rootDir>/src/**/__tests__/*.ts?(x)'],
	globals: {
		'ts-jest': {
			babelConfig: require('./babel.config'),
		},
	},
	moduleNameMapper: {
		'\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
		'\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
	},
};
