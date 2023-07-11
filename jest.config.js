module.exports = {
  coverageDirectory: '<rootDir>/target/test-result',
  reporters: [
    'default',
    ['jest-junit', {output: '<rootDir>/target/test-results/TEST-results-jext.xml'}],
  ],
  testResultsProcessor: 'jest-teamcity-reporter',
  testMatch: ['<rootDir>/test/app/**/*spec.ts']
  ]
}
