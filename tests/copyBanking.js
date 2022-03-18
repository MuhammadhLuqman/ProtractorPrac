
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
     

    })
    it('pick a date',()=>{

        let start = element(by.model("startDate"));
        start.sendKeys('01/01/03:15');

        let finish = element(by.model("end"));
        finish.sendKeys('01/04/2015/02:12');
        browser.sleep(3000)
        
 })

    it('fetch data from the table',async()=> {

        let table = $("table table-bordered table-striped")
        let rows = table.$$('tr');
        let count = await rows.count();
        console.log(count)
      
        
        
        })
    })