describe('Checking the calculator app', function(){
    let firstNumber = element(by.xpath("//div[@class='container ng-scope']//following::input[@class='input-small ng-pristine ng-untouched ng-valid'and@type='text'and@ng-model='first']3"));
    let secondElement = element(by.model('second'));
    let click = element(by.xpath("//button[contains(text(),'Go!')]"));
    let Result = element(by.className('ng-binding'));


    beforeEach(function(){
        browser.get('https://juliemr.github.io/protractor-demo/')
        browser.sleep(3000)

    })
    
    it('check title', function(){
    
        expect(browser.getTitle()).toEqual('Super Calculator');
        
    });
    
    it('check addition' ,function(){
        firstNumber.sendKeys(1);
        secondElement.sendKeys(6);
        click.click();
        browser.sleep(4000);

        expect(Result.getText()).toEqual('7');

    })

});