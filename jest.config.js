/* eslint-disable max-len */
module.exports = {
	roots: ["<rootDir>/src"],
	preset: "ts-jest",
	verbose: true,
	testEnvironment: "jsdom",
	transform: {
		"\\.[jt]sx?$": "babel-jest",
	},
	testPathIgnorePatterns: ["/node_modules/", "/dist/"],
	testMatch: ["<rootDir>/src/**/__tests__/*.ts?(x)"],
	globals: {
		"ts-jest": {
			babelConfig: require("./babel.config"),
		},
	},
	moduleDirectories: ["node_modules", "src"],
	moduleNameMapper: {
		"\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
			"<rootDir>/__mocks__/fileMock.js",
		"\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
		"@application/(.*)":
			"<rootDir>/src/modules/ChuggernautsHockey/application/$1",
		"@domain/(.*)": "<rootDir>/src/modules/ChuggernautsHockey/domain/$1",
		"@infrastructure/(.*)":
			"<rootDir>/src/modules/ChuggernautsHockey/infrastructure/$1",
		"@presentation/(.*)":
			"<rootDir>/src/modules/ChuggernautsHockey/presentation/$1",
	},
};
