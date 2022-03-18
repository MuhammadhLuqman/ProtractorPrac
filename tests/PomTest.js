let myTable = require('../pages/myTable')
describe('Test suite',function(){
 
    
it('new data',()=>{
    
   myTable.get("https://www.way2automation.com/angularjs-protractor/webtables/")
   browser.manage().window().maximize();
   myTable.editB();
   browser.sleep(2000);
   myTable.setName('Muhammadh')
   myTable.setName2('luqman')
   myTable.setUsername('legend')
   myTable.setPassword('king')
   myTable.setCompany();
   myTable.setRole('1')
   myTable.setMail('luqman@gmail.com')
   myTable.setPhone('123456789')
   myTable.pressSave()
   browser.sleep(3000)
   myTable.verifyResult('Muhammadh','luqman','legend','king','Customer','luqman@gmail.com','123456789');
 

})

    



})

