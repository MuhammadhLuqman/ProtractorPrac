describe('Launch angular calculator app', function(){
 let customer = element(by.xpath("//img[@alt='banking']"))
//  let second = element(by.model('second'))
//  let button = element (by.css('#gobutton'))
//  let answer = element(by.css('.ng-binding'))
//  let drop = element.all(by.options('value for (key, value) in operators')).get(2)
  
 it('launch',function() {
         browser.get('https://www.way2automation.com/protractor-angularjs-practice-website.html')
     })

it('Create new Account', () => {
   
    customer.click()
    // drop.click()
    // second.sendKeys('7')
    // button.click()
    // expect(answer.getText()).toEqual('0')

    // browser.sleep(3000)
    })

})