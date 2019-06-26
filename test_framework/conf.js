// Configuration file expects testSuite and brower to be passed as parameters
// while executing tests. These parameters will be used to execute specific
// test category against determined browser
var HtmlReporter = require('protractor-beautiful-reporter');

exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  capabilities: {
    'browserName': 'chrome'
  },
  suites: {
    search: './specs/SearchSpecs.js' ,
    regression: './specs/*.js'
  },
  onPrepare: function () {
    browser.manage().window().maximize(); 
    jasmine.getEnv().addReporter(new HtmlReporter({
        baseDirectory: './reports'
    }).getJasmine2Reporter());// maximize the browser before executing the feature files
  }
};
