
exports.config = {
  allScriptsTimeout: 11000,

  specs: [
    './specs/*.js'
  ],

  capabilities: {
    'browserName': 'chrome'
  },

  baseUrl: 'http://localhost:9999',

  rootElement: 'body',

  framework: 'jasmine',

  jasmineNodeOpts: {

    onComplete: null,

    isVerbose: false,

    showColors: true,

    includeStackTrace: true,

    defaultTimeoutInterval: 10000
  }
};
