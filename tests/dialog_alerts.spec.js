import {test,expect} from '@playwright/test';

test('Dialogue Alert',async({page})=>
{
    page.on('dialog',async dialog =>{
        console.log(`Alert message: ${dialog.message()}`);
        expect(dialog.message()).toContain('I am an altert box');
        await dialog.accept();
    })
    await page.goto
    ('https://testpages.eviltester.com/pages/basics/alerts-javascript/')
await page.locator('#alertexamples').click();

})
    
   