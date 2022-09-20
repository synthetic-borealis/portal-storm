export default {
  // Automatically clear mock calls, instances, contexts and results before every test
  clearMocks: true,

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    "json",
    "html",
    "cobertura",
    "clover"
  ],

  // An array of file extensions your modules use
  moduleFileExtensions: [
    "ts",
    "tsx",
    "js",
    "jsx",
    "json",
    "node"
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    "<rootDir>/__tests__"
  ],

  // The test environment that will be used for testing
  testEnvironment: "jsdom",

  // A map from regular expressions to paths to transformers
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
};
