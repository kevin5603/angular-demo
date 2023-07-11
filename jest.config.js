module.exports = {
  preset: "jest-preset-angular",
  testEnvironment: 'jsdom',
  coverageDirectory: '<rootDir>/target/test-result',
  reporters: [
    'default'
  ],
  testResultsProcessor: 'jest-teamcity-reporter',
  setupFilesAfterEnv: [
    "<rootDir>/src/setup-jest.ts"
  ],
  testPathIgnorePatterns: [
    "<rootDir>/node_modules/",
    "<rootDir>/dist/"
  ],
}
