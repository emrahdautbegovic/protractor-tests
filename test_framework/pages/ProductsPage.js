var chaiAsPromised = require('chai-as-promised');
var chai = require('chai');
chai.use(chaiAsPromised);
var expect = chai.expect;
const fs = require('fs');

var PopularProductPage = function() {
    
    var tops = element.all(by.xpath('//a[contains(text(), "Tops")]')).get(0)
    var dresses = element.all(by.xpath('//a[contains(text(), "Dresses")]')).get(0)
    var products = element.all(by.css('.product-container'))
    var searchInput = element(by.id('search_query_top'))
    var searchButton = element(by.name('submit_search'))
    var signOut = element(by.css('.logout')) 
    var bestSellersLink = element(by.xpath("//ul[@class='toggle-footer']//li//a[contains(text(), 'Best sellers')]"))
    var womenMenu = element.all(by.xpath("//a[contains(text(), 'Women')]")).get(0)

    let prods = [];


    this.visualCheck = function(){
        signOut.getText().then(function(text){
            expect(text).to.equal('Sign out')
        })
    }

    this.clickOnBestSellers = function() {
        bestSellersLink.click()
    }

    this.clickOnWomenMenuItem = function() {
        womenMenu.click()
    }

    this.browserSleep = function(milisecs){
        browser.sleep(milisecs)
    }

    this.checkProductsNumber = function(num) {
        element.all(by.xpath('//div[@class="product-container"]//div[@class="right-block"]//h5//a[@class="product-name"]')).then(function (elements) { 
            expect(elements.length).to.equal(num)
        }); 
    }

    this.searchForItem = function(item) {
        searchInput.click().clear().sendKeys(item)
        searchButton.click()
        element.all(by.xpath('//div[@class="product-container"]//div[@class="right-block"]//h5//a[@class="product-name"]')).each(function (el) { 
            return el.getText().then(function(text){
                fs.appendFile("./test_framework/searchResults/searchResults.txt", text + "\n", function(err) {
                    if(err) {
                        return console.log(err);
                    }
                    console.log("The file was saved!");
                }); 
            })
        }); 
    }
};

module.exports = new PopularProductPage();