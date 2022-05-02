// conf.js
let SpecReporter = require('jasmine-spec-reporter').SpecReporter

exports.config = {
    framework: 'jasmine2',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['spec.js'],

    capabilities: {
        browserName: 'chrome'
      },
     // {
        //  browserName: 'firefox'
     // }]

     onPrepare: function () {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter({
          resultsDir: 'allure-results'
        }));
        jasmine.getEnv().addReporter(
          new SpecReporter({
            spec: {
              displayStacktrace: true,
            },
          })
        )
        },

  }
