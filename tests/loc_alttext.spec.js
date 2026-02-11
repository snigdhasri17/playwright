

import {test,expect} from '@playwright/test';
test( 'loc_get by alt text ',async({page})=>{
    await page.goto('https://www.bookswagon.com/')
    await page.getByPlaceholder('Search by Title, Author, Publisher or ISBN')
    .fill('Fiction')
    await page.locator("xpath=//*[@name='btnTopSearch']").click()
    await page.getByAltText('Sacred Waters').click()

})

