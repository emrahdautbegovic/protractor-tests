var homePage = require('../pages/HomePage.js');

describe('Protractor Demo App', function() {
    it('I am on Klix home page', function() {
        homePage.startKlix()
        console.log('open klix')
        homePage.visualCheck()
        homePage.clickOnSearchIcon()
        console.log('click on search icon')
        homePage.enterSearchText("emrah test")
        console.log('enter text')
        homePage.startSearch()
        homePage.noResultsScreenIsDisplayed()
    })
})

 
