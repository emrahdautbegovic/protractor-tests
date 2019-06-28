var EnterPersonalInformationPage = function() {
    
    var maleGender = element.all(by.css('.radio-inline')).get(0)
    var femaleGender = element.all(by.css('.radio-inline')).get(1)
    var nameInput = element(by.id('customer_firstname'))
    var lastnameInput = element(by.id('customer_lastname'))
    var emailInput = element(by.id('email'))
    var passwordInput = element(by.id('passwd'))
    var checkNewsletter = element(by.id('uniform-newsletter'))
    var checkSpecialOffers = element(by.id('optin'))
    var firstname = element(by.id('firstname'))
    var lastname = element(by.id('lastname'))
    var company = element(by.id('company'))
    var address1 = element(by.id('address1'))
    var address2 = element(by.id('address2'))
    var city = element(by.id('city'))
    var selectState = element(by.id('id_state'))
    var postalCode = element(by.id('postcode'))
    var country = element(by.id('id_country'))
    var additionalInfo = element(by.id('other'))
    var homePhone = element(by.id('phone'))
    var mobilePhone = element(by.id('phone_mobile'))
    var submitButton = element(by.id('submitAccount'))
    var alias = element(by.id('alias'))

    this.browserSleep = function(milisecs){
        browser.sleep(milisecs)
    }

    this.enterEmail = function(email) {
        emailInput.click().sendKeys(email)
    }
  
    this.clickOnCreateAccountButton = function() {
        createAccountButton.click()
    }

    this.selectMaleGender = function() {
        maleGender.click()
    }

    this.selectFemaleGender = function() {
        femaleGender.click()
    }

    this.enterFirstNameInPersonalInfo = function(name) {
        nameInput.click().sendKeys(name)
    }

    this.enterLastNameInPersonalInfo = function(lastname) {
        lastnameInput.click().sendKeys(lastname)
    }

    this.enterEmailInPersonalInfo = function(email) {
        emailInput.click().sendKeys(email)
    }

    this.enterPasswordInPersonalInfo = function(passwd) {
        passwordInput.click().sendKeys(passwd)
    }

    this.selectBirthdayDay = function(day) {
        var dayValue = element.all(by.css('option[value="' + day + '"]')).get(0)
        dayValue.click()
    }

    this.selectBirthdayMonth = function(month) {
        var monthValue = element.all(by.css('option[value="' + month + '"]')).get(1)
        monthValue.click()
    }

    this.selectBirthdayYear = function(year) {
        var yearValue = element(by.css('option[value="' + year + '"]'))
        yearValue.click()
    }

    this.clickOnNewsletterChbox = function() {
        checkNewsletter.click()
    }

    this.checkOptin = function() {
        checkSpecialOffers.click()
    }

    this.enterNameInAddressForm = function(name) {
        firstname.click().sendKeys(name)
    }

    this.enterLastameInAddressForm = function(last_name) {
        lastname.click().sendKeys(last_name)
    }

    this.enterCompanyInAddressForm = function(comp) {
        company.click().sendKeys(comp)
    }

    this.enterAddress1 = function(address) {
        address1.click().sendKeys(address)
    }

    this.enterAddress2 = function(address) {
        address2.click().sendKeys(address)
    }

    this.enterCity = function(cty) {
        city.click().sendKeys(cty)
    }

    this.selectState = function(state) {
        selectState.click()
        var stateValue = element(by.cssContainingText('option', state))
        stateValue.click()
    }

    this.enterZipcode = function(code) {
        postalCode.click().sendKeys(code)
    }

    this.enterAdditionalInfo = function(info) {
        additionalInfo.click().sendKeys(info)
    }

    this.enterHomePhone = function(phone) {
        homePhone.click().sendKeys(phone)
    }

    this.enterMobilePhone = function(phone) {
        mobilePhone.click().sendKeys(phone)
    }

    this.enterAlias = function(alias_address) {
        alias.click().clear().sendKeys(alias_address)
    }

    this.clickSubmitBtn = function() {
        submitButton.click()
    }

    this.sleep = function() {
        browser.sleep(10000)
    }
};
  
  module.exports = new EnterPersonalInformationPage();