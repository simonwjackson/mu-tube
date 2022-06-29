/** @type {import('ts-jest/dist/types').InitialOptionsTsJest} */
export default {
  preset: 'ts-jest',
  testEnvironment: 'node',
  "transform": {
    "^.+\\.[tj]s$": "ts-jest"
  },
  "transformIgnorePatterns": [
    // INFO: https://github.com/kulshekhar/ts-jest/issues/970#issuecomment-1014215089
    "<rootDir>/node_modules/(?!@sindresorhus/fnv1a)"
  ],
  "globals": {
    "ts-jest": {
      "tsconfig": {
        "allowJs": true
      }
    }
  }
};

