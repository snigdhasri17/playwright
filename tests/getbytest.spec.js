import{test,expect} from '@playwright/test';

test('getByText locator demo',async({page})=>
{
await page.goto('https://parabank.parasoft.com/parabank/index.htm')
await page.getByText('Register').click();
})