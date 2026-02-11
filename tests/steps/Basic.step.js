const{ Given ,When ,Then ,Before,After,setDefaultTimeout}=
require('@cucumber/cucumber');

const{chromium,expect}= require("@playwright/test")
const { before } = require("node:test");


setDefaultTimeout(60*1000);
let page,browser;
Before(async function(){
browser=await chromium.launch({headless:false});
const context=await browser.newContext();

page = await context.newPage();

})

Given('browser is open', async function () {
           // Write code here that turns the phrase above into concrete actions
            await page.goto('https://www.google.com/');


          // return 'pending';
         });
       
  
         Given('user is on google search page', async function () {
           // Write code here that turns the phrase above into concrete actions
            await page.getByRole('combobox', { name: 'Search' }).click(); 
            await page.getByRole('combobox', { name: 'Search' }).fill('tcs');
            await page.click();
           // await page.getByTitle('Search').click()
           //return 'pending';
         });
       
  
      
       
         When('user enters atest in search page', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       
   
     
       
         Then('user is navigated to search results', async function () {
           // Write code here that turns the phrase above into concrete actions
           return 'pending';
         });
       

