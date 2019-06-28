# protractor-tests

This project contains test scripts

Prerequisites: Node is installed <br>

How to run tests:
  1. Open project folder through command line
  2. Enter: npm install -g protractor
  3. Enter: npm install
  4. Enter: webdriver-manager update --versions.standalone=3.8.0 && webdriver-manager start --versions.standalone=3.8.0
  5. Open new terminal tab and run tests with: protractor test_framework/conf.js --suite symphonyTest
