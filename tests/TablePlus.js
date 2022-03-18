describe('control table',()=>{

    beforeAll(async()=>{
        await browser.get('https://www.way2automation.com/angularjs-protractor/webtables/');
    })


    it('table',async()=>{
        let rows = element.all(by.xpath('.//tbody/tr'));
        let rowdata = await  rows.count().then((rowcount)=>{
       console.log(rowcount);
       expect(rowcount).toBe(7);

       for(let i=0;i<rowcount;i++){
          let ftd= rows.get(i).$$('td').get(0).then((rub)=>{
          let fdata = await ftd
            console.log(rub)

          })
        
       }

       })
    })
})
