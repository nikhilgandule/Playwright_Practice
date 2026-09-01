import { test, expect } from '@playwright/test';

test("Locators Example", async({page})=>{

    await page.goto('https://demoqa.com/text-box');

    //ID Locator
    await page.locator('#userName').fill('Nikhil');

    //Placeholder Locator
    await page.getByPlaceholder('name@example.com').fill('nikhil@gmail.com');

    //CSS Locator (ID)
    await page.locator('#currentAddress').fill('Pune');

    //XPath Locator
    await page.locator('//textarea[@id="permanentAddress"]').fill('Pandharpur');

    //Role Locator
    await page.getByRole('button', { name : 'Submit' }).click();

});
