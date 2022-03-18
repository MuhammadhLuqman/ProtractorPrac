let myTable =function(){ 

    let editButton = element(by.xpath("//button[@class='btn btn-link pull-right']"));

   let firstName =element(by.name('FirstName'));
   let SecondName= element(by.name('LastName'));
   let username1= element(by.name('UserName'));
   let password=  element(by.name('Password'));
   let companyName=  element(by.xpath("//input[@value='16']"));
   let Irole=  element(by.name('RoleId'));
   let email= element(by.name('Email'))
   let phone=  element(by.name('Mobilephone'));
   let okSave = element(by.className('btn btn-success'));

  
   this.get=function(url) {
       browser.get(url);
   }

   this.editB=function(){
    editButton.click();
}

   this.setName=function(name1){
       firstName.sendKeys(name1);
   }
   this.setName2=function(name2)
   {
       SecondName.sendKeys(name2);
   }
   this.setUsername=function(username){
   username1.sendKeys(username)
   }

   this.setPassword=function(pass){
       password.sendKeys(pass)
   }

   this.setCompany=function(){
       companyName.click();

   }

   this.setRole=function(myRole){
       Irole.element(by.css('option[value="'+myRole+'"]')).click();
   }

   this.setMail=function(myMail){
       email.sendKeys(myMail);
   }

   this.setPhone=function(myPhone){
       phone.sendKeys(myPhone);
   }

   this.pressSave= function(){
       okSave.click();
   }

   this.verifyResult=function(name1,name2,username,pass,myRole,myMail,myPhone){
       let rows = element.all(by.tagName('tr'));
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[1]")).getText()).toBe(name1);
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[2]")).getText()).toBe(name2);
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[3]")).getText()).toBe(username);
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[6]")).getText()).toBe(myRole);
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[7]")).getText()).toBe(myMail);
       expect(rows.get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[8]")).getText()).toBe(myPhone);
   }
  

}
module.exports = new myTable();