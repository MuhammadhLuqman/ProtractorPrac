
describe('Launch angular banking app', function(){
    

    it('Launch the url',()=>{

        browser.get('https://www.way2automation.com/angularjs-protractor/banking/#/login');
        browser.manage().window().maximize();
        element(by.xpath("//button[@class='btn btn-primary btn-lg'and@ng-click='customer()']")).click();
    

    })
       
     it('Test the dropDown', ()=>{
        element(by.model('custId')).element(by.css("option[value='1']")).click();
        element(by.buttonText('Login')).click();
        element(by.xpath("//button[@class='btn btn-lg tab'and@ng-click='transactions()']")).click();
     // browser.executeScript("document.getElementById('start')~.value='02-01-2015'")
     // browser.executeScript("document.getElementsByClassName('ng-pristine ng-untouched ng-valid')[0].value='03-01-2015'")

    })
    it('pick a date',()=>{

        let start = element(by.model("startDate"));
        start.sendKeys('01/01/03:15');

        let finish = element(by.model("end"));
        finish.sendKeys('01/03/2015/02:12');
        browser.sleep(3000)
        
 })

    it('fetch data from the table',()=> {
      
        let beforeXpath = '//*[@id="anchor';
        let afterXpath = '"]/td[3]';
   
        for(let i=1; i<=3; i++){
         let actualXpath = beforeXpath+i+afterXpath;
         let data= element(by.xpath(actualXpath))
         data.getText().then((actual) => {
                //console.log(actual);
                 if(actual.indexOf('Credit')!==-1){
                    element(by.xpath('//*[@id="anchor'+i+'"]/td[2]')).getText().then((myvalue)=>{
                        let numm = [];
                        numm.push(myvalue)
                        console.log(numm);
                    })
                 
                 }
             })
          }
    })

    it('count',async ()=>{
      // let table = $("table.table table-bordered table-striped tbody")
       let rows = element.all(by.xpath('.//tbody/tr'));
        let rowdata = await  rows.count().then((rowcount)=>{
       console.log(rowcount);
       })
    })




    })

      
    
    // it('table',()=> {

    //     let alltab = element.all(by.xpath("//table[@class='table table-bordered table-striped']//td[2]//text()"))
    //     if(alltab === 30){
    //         console.log(alltab);

    //     }

  
        // let allData = element.all(by.repeater('tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end'))
        // let rows = allData.all(by.tagName('tr'))
        // let cells = allData.all(by.tagName('td'))
        //td[text()='30']
        //*[@id="anchor0"]/td[2]
        //*[@id="anchor1"]/td[2]
        //*[@id="anchor2"]/td[2]
      
        
      //let data= element(by.xpath("//table[@class='table table-bordered table-striped']/tbody/tr/td[2]"))
      
      

    

    // it('table',()=> {

    //     let allData = element.all(by.tagName('tr')).filter(tr =>{
    //         tds = tr.all(by.tagName('td'))
    //         return tds.get(0).getText().then(text =>{
    //             return text.includes('30')
    //         })


    //     })

    //     let spe = allData.get(0)
    //     let tds = spe.all(by.tagName('td'))
    //     let des = tds.get(2)
    //     des.getText().then(text =>{
    //         console.log(text)
    //     })
    //
