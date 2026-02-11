import{test,expect} from '@playwright/test';
test('iframe',async({page})=>
{
    await page.goto
('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test')
//switch to iframe
const iframe = page.frameLocator('#iframeResult');
//click button inside iframe

await iframe.locator('button').click();
//verify alert 
page.on('dialog',dialog=>{
    expect(dialog.message()).toContain('hello');
    dialog.accept();
})

})

test('iframe using page.frame()',async({page})=>
{
    await page.goto
    ('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_button_test')
    await page.waitForSelector('#iframeResult');
    const frame = page.frame({url:/tryhtml_button_test/});
    await frame.click('button');
    page.on('dialog',dialog => dialog.accept());
});