var RegistrationPage = function() {
    
    var signIn = element(by.xpath('//a[contains(text(), "Sign in")]'))
    var emailCreateInput = element(by.name('email_create'))
    var createAccountButton = element(by.id('SubmitCreate'))

    this.visualCheck = function(){
      var promiseList = []
      promiseList.push(browser.wait(signIn, 5000, "Sign in button not found"))
      return Promise.all(promiseList).then(function(results){
        return new Promise((resolve, reject) => { setTimeout(() => { resolve(); }, 5000); });
      }, function(err){
        console.log(err)
      })
    }

    this.enterEmail = function(email) {
        emailCreateInput.click().sendKeys(email)
    }
  
    this.clickOnCreateAccountButton = function() {
        createAccountButton.click()
    }

    this.browserSleep = function(milisecs){
        browser.sleep(milisecs)
    }
  };
  
  module.exports = new RegistrationPage();