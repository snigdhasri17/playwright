import{test,expect} from '@playwright/test';
test('Check_Box',async({page})=>
{
    await page.goto('https://the-internet.herokuapp.com/checkboxes')
    //assert that the check box is visible
    await expect(page.locator('#checkboxes')).toBeVisible()
    //assert that the checkbox-1 is unchecked
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()
    expect(await page.isChecked['input[type=checkbox]:nth-child(3)']).toBeTruthy()
    //check checkbox 1
    await page.check('input[type=checkbox]:nth-child(1)')
    await page.check('input[type=checkbox]:nth-child(3)')

    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeTruthy()
    expect(await page.isChecked('input[type=checkbox]:nth-child(1)')).toBeFalsy()

    
})
