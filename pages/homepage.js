let homepage = function(){

    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.get = function(url){
        browser.get(url);

    }

    this.enterFirstNumber = function(num1){
        firstNumber.sendKeys(num1);
    }

    this.enterSecondNumber = function(num2){
        secondNumber.sendKeys(num2);
    }
    
    this.pressGo =function(){
        goButton.click();
    }

    this.verifyResult =function(result){
        let output = element(by.cssContainingText('.ng-binding',result));
        expect(output.getText()).toEqual(result);

    }
}

module.exports = new homepage();