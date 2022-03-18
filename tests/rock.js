describe('open facebook page',()=>{
   browser.ignoreSynchronization = true
   let create = element(by.className("_42ft _4jy0 _6lti _4jy6 _4jy2 selected _51sy"))
   let name = element(by.name('firstname'));
   let name2 = element(by.name('lastname'));
   let mobile = element(by.name('reg_email__'));
   let password = element(by.name('reg_passwd__'));
   let drop1 = element(by.name('birthday_day')).element(by.css("option[value='12']"))



it('open the url',()=>{
    browser.get('https://www.facebook.com/')
   
    browser.manage().timeouts().implicitlyWait(3000)
    create.click()
    name.sendKeys('legend')
    name2.sendKeys('luqman')
    mobile.sendKeys('5436877839')
    password.sendKeys('dommmu')
    drop1.click()
    browser.sleep(3000)




})

})