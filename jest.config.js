module.exports = {
  coverageDirectory: '<rootDir>/target/test-result',
  collectCoverage: true,
  reporters: [
    'default'
  ],
  testResultsProcessor: 'jest-teamcity-reporter',
  testMatch: ['<rootDir>/test/app/**/*spec.ts']
}
