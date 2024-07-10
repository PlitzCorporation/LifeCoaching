/**
 * For a detailed explanation regarding each configuration property, visit:
 * https://jestjs.io/docs/configuration
 */

import type { Config } from 'jest';
import nextJest from 'next/jest';

const createJestConfig = nextJest({
	// Provide the path to your Next.js app to load next.config.js and .env files in your test environment
	dir: './',
});

const config: Config = {
	// Indicates which provider should be used to instrument code for coverage
	coverageProvider: 'v8',

	// The test environment that will be used for testing
	testEnvironment: 'jsdom',

	// Add more setup options before each test is run
	setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'],

	moduleNameMapper: {
		'@/(.*)$': '<rootDir>/$1',
	},

	coveragePathIgnorePatterns: ['index.ts', 'index.js'],

	collectCoverageFrom: [
		'app/**/*.{js,jsx,ts,tsx}',
		'!app/**/page.{js,jsx,ts,tsx}',
		'!app/**/layout.{js,jsx,ts,tsx}',
		'components/**/*.{js,jsx,ts,tsx}',
		'helpers/**/*.{js,jsx,ts,tsx}',
		'hooks/**/*.{js,jsx,ts,tsx}',
		// We don't test type definitions.
		'!**/*.d.ts',
	],

	coverageThreshold: {
		global: {
			statements: 40,
			branches: 30,
			functions: 30,
			lines: 40,
		},
	},
};

export default createJestConfig(config);
