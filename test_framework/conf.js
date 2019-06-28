// Configuration file expects testSuite and brower to be passed as parameters
// while executing tests. These parameters will be used to execute specific
// test category against determined browser
var reporters = require('jasmine-reporters');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  suites: {
    symphonyTest: './specs/SymphonyTest.js' ,
    regression: './specs/*.js'
  },

  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 360000
  },

  allScriptsTimeout: 360000, 

  onPrepare: function () {

    browser.manage().window().maximize(); 

    var junitReporter = new reporters.JUnitXmlReporter({
        savePath: './test_framework/reports',
        consolidateAll: false
    })
    jasmine.getEnv().addReporter(junitReporter)
  }
};
