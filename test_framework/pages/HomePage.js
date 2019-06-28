var HomePage = function() {
  var signIn = element(by.xpath('//a[contains(text(), "Sign in")]')) //Found out that xpath could really be interresting and simple (thx to Amir G.)

  this.visualCheck = function(){
    var promiseList = []
    promiseList.push(browser.wait(signIn, 5000, "Sign in button not found"))
    return Promise.all(promiseList).then(function(results){
      return new Promise((resolve, reject) => { setTimeout(() => { resolve(); }, 5000); });
    }, function(err){
      console.log(err)
    })
  }

  this.startApp = function() {
    browser.ignoreSynchronization = true
    browser.get('http://automationpractice.com/', 20000)
  };

  this.clickOnSingIn = function() {
    signIn.click()
  }
};

module.exports = new HomePage();