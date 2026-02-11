import{test,expect} from '@playwright/test';
test('getbytitle',async({page})=>
{
    await page.goto('https://parabank.parasoft.com/parabank/')
   // await page.getByRole()
    await page.getByTitle('parabank').click()
})