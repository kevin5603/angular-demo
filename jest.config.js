module.exports = {
  coverageDirectory: '<rootDir>/target/test-result',
  collectCoverage: true,
  reporters: [
    'default'
  ],
  testResultsProcessor: 'jest-teamcity-reporter'
}
