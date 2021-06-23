module.exports = {
  roots = ['<rootDir>/src'],
  testEnvironment: 'node',
  transform: {
    '.+\\.ts$': 'ts-jest'
  },
  moduleNameHelper: {
    '@/(.*)': '<rootDir>/src/$1'
  }
}