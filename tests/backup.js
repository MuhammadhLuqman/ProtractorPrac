  it('table',()=> {
let beforeXpath = '//*[@id="anchor'

let afterXpath = '"]/td[2]'
for(let i=1; i<=126; i++){
    let actualXpath = beforeXpath+i+afterXpath
   let data= element(by.xpath(actualXpath))
   data.getText().then(text=>{
       console.log(text)

   })
  
}
  })