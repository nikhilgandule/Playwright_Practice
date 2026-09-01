import {test, expect} from '@playwright/test';

test('Native HTML Dropdown', async({page}) =>{
    
    await page.goto('https://the-internet.herokuapp.com/dropdown');

    //await page.locator('#dropdown').selectOption('1');

    //By Label
    //await page.locator('#dropdown').selectOption({ label: 'Option 1' });

    //By Index
    await page.locator('#dropdown').selectOption({index: 1});

    await expect(page.locator('#dropdown')).toHaveValue('1');

});


