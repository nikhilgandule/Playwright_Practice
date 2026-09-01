import { test, expect } from '@playwright/test';

test('My First Playwright JavaScript Test', async ({ page }) => {

    // Go to URL
    await page.goto('https://www.google.com/');

    // Search with keywords
    await page.getByLabel('Search', { exact: true }).fill('playwright by Testers Talk');
    await page.getByLabel('Search', { exact: true }).press('Enter');

    // Click on playlist
    await page.getByRole('link', { name: 'Playwright by Testers Talk' }).first().click();

    // Validate web page title
    await expect(page).toHaveTitle('Playwright by Testers Talk');
});

test('Google Test', async ({ page }) => {
    await page.goto('https://google.com');

    await page.fill('textarea[name="q"]', 'Playwright');
    await page.press('textarea[name="q"]', 'Enter');

    await expect(page).toHaveURL(/search/);
});

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

