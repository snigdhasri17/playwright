import { test, expect } from '@playwright/test';

test('getByRole',async({page})=>{
    //goto opens the page
    await page.goto('https://parabank.parasoft.com/parabank/index.htm')
   // await expect(page).toHaveTitle(/parabank/);
   //clicks the forgot login password icon
    await page.getByRole("link",{name:"Forgot login info?"}) .click()
    
}
)


