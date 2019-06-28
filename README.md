# protractor-tests

This project contains test scripts

Prerequisites: Node is installed <br>

How to run tests:
  1. Open project folder through command line
  2. Enter: npm install
  3. Enter: webdriver-manager update --versions.standalone=3.8.0 && webdriver-manager start --versions.standalone=3.8.0
  4. Open new terminal tab and run tests with: protractor test_framework/conf.js --suite symphonyTest
