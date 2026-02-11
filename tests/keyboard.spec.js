import{test,expect} from '@playwright/test';

test('keyBoard',async({page})=>
{
    await page.goto('https://textbox.johnjago.com/');
    await page.locator("//textarea")
    .pressSequentially("sowmya be concentrate",{delay:200})
    await page.locator("//textarea").press('Control+A');
    //await page.locator("//textarea").press("Enter");
    //await page.locator("//textarea").press("Control+c");
    //await page.locator("//textarea").press("Control+v");
   await page.locator("//textarea").press('Backspace');
    await page.keyboard.type('Hello word');
    await page.keyboard.press('ArrowLeft');
    await page.keyboard.down('Shift');
    for(let i=0;i<'word'.length; i++)
        await page.keyboard.press('ArrowLeft');
    await page.keyboard.down('Shift');
   await page.keyboard.press('Backspace')





})