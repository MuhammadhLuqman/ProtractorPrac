describe('Launch angular banking app', function(){
    browser.ignoreSynchronization = true



 it('launch',function() {
        browser.driver.get('https://www.way2automation.com/angularjs-protractor/banking/#/listTx#anchor')
        browser.sleep(3000);
    //    let rows = element.all(by.repeater("tx in transactions | orderBy:sortType:sortReverse | sDate:startDate:end")).click()
    //     browser.sleep(3000);

        // rows.each(function(row){

        //     let cells =row.$$('td');
        //     cells.get(0).getText().then(function(txt: any){
        //         if(txt == '30'){
        //             cells.get()
        //         }
        //     })

        let credit = element.all(by.tagName('tr')).filter(tr=>{
            tds = tr.all(by.tagName('td'));
            return tds.get(0).getText().then(text =>{
                return text.includes('Credit')
            });
        });

        let cr = credit.get(0);
        let creditTd = cr.all(by.tagName('td'));
        let creditCode = creditTd.get(2);

        creditCode.getText().then(text =>{
            console.log(text)
        })

        })
    })