describe('Check the multiform angular app',function(){

    it('launch the website',()=>{
        browser.get('https://www.way2automation.com/angularjs-protractor/multiform/#/form/profile');
    })

    it('Give the details',()=>{
        element(by.name('name')).sendKeys('luqman')
        element(by.name('email')).sendKeys('luqman@gmail.com')
        element(by.className('btn btn-block btn-info')).click();
        element(by.xpath("//input[@value='xbox']")).click()
        element(by.className('btn btn-block btn-info')).click()
        element(by.buttonText('Submit')).click();
        browser.sleep(3000);
        let myAlert = browser.switchTo().alert();
        myAlert.accept();
        browser.sleep(3000);


    })

})
