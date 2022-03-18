describe('new',()=>{

    it('all headers',async ()=>{
        browser.get('https://www.way2automation.com/angularjs-protractor/webtables/')
        browser.sleep(3000)
    })
        it('fetch data from the table', ()=> {
      
            let beforeXpath ='/html/body/table/tbody/tr['
            let afterXpath =']/td[6]'
            let EnterData = 'Customer'
       
            for(let i=1; i<=7; i++){
             let actualXpath = beforeXpath+i+afterXpath;
             let data= element(by.xpath(actualXpath))
             data.getText().then((actual) => {
                    //console.log(actual);
                     if(actual.indexOf(EnterData)!==-1){
                        let first= element(by.xpath('/html/body/table/tbody/tr['+i+']/td[1]')).getText().then((myvalue)=>{
                             //console.log(myvalue); 
                           let second=  element(by.xpath('/html/body/table/tbody/tr['+i+']/td[2]')).getText().then((nextvalue)=>{
                              //console.log(nextvalue);
                              let fullname = "First Name is "+myvalue+' '+"Second Name is " +nextvalue
                              let numm = []
                              numm.push(fullname)
                              console.log(numm);
                           })
                        })
                    }
         })
            }
            
        
    })
    })




















    
    //     let rows = element.all(by.repeater('dataRow in displayedCollection'));
    //   browser.sleep(2000);
    //   rows.each(function(row){
    //       let cells =row.$$('td');
    //       cells.get(5).getText().then(function(txt){
    //           //console.log(txt)
    //           if(txt== 'Customer'){
    //               let name = await cells.get(2).$$('smart-table-data-cell').getText().then(function(red){
    //                 //console.log(red);
    //                 console.log(name);
    //               })
                  
                  
                 
    //           }
    //       })

    //   })
     