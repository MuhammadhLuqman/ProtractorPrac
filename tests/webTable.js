describe('launch the angular webTable',()=>{
    

it ('launch the page',()=>{
    browser.get("https://www.way2automation.com/angularjs-protractor/webtables/")
    browser.manage().window().maximize();
})
it('add user details',async()=>{
    for(let i=0;i<=7;i++){
  await element(by.className('btn btn-link pull-right')).click();

   await element(by.name('FirstName')).clear().sendKeys('Muhammadh'+i)
   await element(by.name('LastName')).clear().sendKeys('luqman'+i)
   await element(by.name('UserName')).clear().sendKeys('legend'+i)
   await element(by.name('UserName')).clear().sendKeys('legend'+i)
   await element(by.name('Password')).clear().sendKeys('Thunder'+i)
  
   if(i%2==0){
   await element(by.xpath("//input[@value='16']")).click()
   await element(by.name('RoleId')).element(by.css('option[value="'+1+'"]')).click();
  
   }
   else{
    await element(by.xpath("//input[@value='15']")).click()
    await element(by.name('RoleId')).element(by.css('option[value="'+2+'"]')).click();
   }
   await element(by.name('Email')).clear().sendKeys('luqman'+i+'@gmail.com')
   await element(by.name('Mobilephone')).clear().sendKeys('12345666'+i)
   await element(by.xpath("//button[@ng-click='save(user)']")).click()
    }
})

it('find table row count 1',async ()=>{
    let rows = await element.all(by.xpath('.//tbody/tr')).count().then((allRows)=>{
    console.log("Number of Rows in 1st page is  "+allRows);

    let beforeXpath ='/html/body/table/tbody/tr['
    let afterXpath =']/td[6]'
    let EnterData = 'Customer'

    for(let i=1; i<=allRows; i++){
     let actualXpath = beforeXpath+i+afterXpath;
     let data= element(by.xpath(actualXpath))
     data.getText().then((actual) => {
            //console.log(actual);
             if(actual.indexOf(EnterData)!==-1){
                let first= element(by.xpath('.//tbody/tr['+i+']/td[1]')).getText().then((myvalue)=>{
                     //console.log(myvalue); 
                   let second=  element(by.xpath('.//tbody/tr['+i+']/td[2]')).getText().then((nextvalue)=>{
                      //console.log(nextvalue);
                      let fullname = "First-Name = "+myvalue+' ,'+"Second-Name = " +nextvalue
                      let numm = []
                      numm.push(EnterData+" "+fullname)
                      console.log(numm);
                   })
                })
            }
 })
    }
    
})
})
it('find table row count 2',async ()=>{
    await element(by.xpath("(//a[@class='ng-binding'])[4]")).click();
    let nextrows = await element.all(by.xpath('.//tbody/tr')).count().then((nextRows)=>{
     console.log("Number of Rows in 2nd page  "+nextRows)

     let beforeXpath ='/html/body/table/tbody/tr['
     let afterXpath =']/td[6]'
     let EnterData = 'Admin'

     for(let i=1; i<=nextRows; i++){
      let actualXpath = beforeXpath+i+afterXpath;
      let data= element(by.xpath(actualXpath))
      data.getText().then((actual) => {
             //console.log(actual);
              if(actual.indexOf(EnterData)!==-1){
                 let first= element(by.xpath('.//table/tbody/tr['+i+']/td[1]')).getText().then((myvalue)=>{
                      //console.log(myvalue); 
                    let second=  element(by.xpath('.//table/tbody/tr['+i+']/td[2]')).getText().then((nextvalue)=>{
                       //console.log(nextvalue);
                       let fullname = "First Name = "+myvalue+' ,'+"Second Name = " +nextvalue
                       let numm = []
                       numm.push(EnterData+" "+fullname)
                       console.log(numm);
                    })
                 })
             }
  })
     }
     

    })
})

// it('Check the details in the table',()=>{
// let firstName = 'Muhammadh';
// let lastName = 'luqman';
// let userName = 'legend';
// let passWord = 'Thunder';
// let company = 'Company BBB';
// let role = 'Customer';
// let email = 'luqman@gmail.com';
// let phone = '12345666';

// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[1]")).getText()).toBe(firstName);
// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[2]")).getText()).toBe(lastName);
// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[3]")).getText()).toBe(userName);
// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[6]")).getText()).toBe(role);
// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[7]")).getText()).toBe(email);
// expect(element.all(by.tagName('tr')).get(0).element(by.xpath("/html/body/table/tbody/tr[1]/td[8]")).getText()).toBe(phone);

// })




})