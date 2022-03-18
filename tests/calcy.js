let homepage = require('../pages/homepage')

describe('demo calc',()=>{
    it('add test',()=>{

        homepage.get('https://juliemr.github.io/protractor-demo/');
        browser.sleep(5000)

    })
})