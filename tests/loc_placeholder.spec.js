import{test,expect} from '@playwright/test';
test('placeHolder',async({page})=>{
    await page.goto('https://www.flipkart.com/')
    await page.getByPlaceholder('Search for Products, Brands and More').
    fill('laptops')
    //await page .press()
})


