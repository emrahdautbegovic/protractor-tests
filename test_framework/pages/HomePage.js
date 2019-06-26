// LoginPage is page object which should have identifier for all
// elements on Log In page and functions to workaround with them
var EC = protractor.ExpectedConditions;
var until = protractor.ExpectedConditions;
var HomePage = function() {
  // element locators, how to use them: http://www.protractortest.org/#/locators
  var searchButton = element(by.css('.pretraga-lupa'))
  var searchInput = element(by.name('pojam'))
  var klixLogo = element(by.css('.logoimg'))
  var vijestiMenu = element(by.cssContainingText('.tch_vijesti', 'Vijesti'))
  var noResults = element(by.xpath('//body[contains(text(), "Nema rezultata")]'))
  var startSearch = element(by.css('.icon_enter'))

  this.visualCheck = function(){
    var promiseList = []
    promiseList.push(browser.wait(searchButton, 5000, "Search button not found"))
    promiseList.push(browser.wait(klixLogo, 5000, "Klix logo is not displayed"))
    promiseList.push(browser.wait(vijestiMenu, 5000, "Menu vijesti is not displayed"))
    return Promise.all(promiseList).then(function(results){
      return new Promise((resolve, reject) => { setTimeout(() => { resolve(); }, 5000); });
    }, function(err){
      console.log(err)
    })
  }

  this.startKlix = function() {
    browser.ignoreSynchronization = true
    browser.get('https://www.klix.ba/', 20000)
  };

  this.clickOnSearchIcon = function() {
    searchButton.click()
  }

  this.enterSearchText = function(text) {
    browser.wait(searchInput, 5000, "Search button not found")
    searchInput.click().sendKeys(text)
  }

  this.startSearch = function() {
    startSearch.click()
  }

  this.noResultsScreenIsDisplayed = function() {
    browser.wait(noResults, 5000, "No results screen error")
  }
};

module.exports = new HomePage();