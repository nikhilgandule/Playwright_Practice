import {test, expect} from '@playwright/test';

test("Actions ", async({ page }) => {

    await page.goto("https://demoqa.com/text-box");

    await page.locator("#userName").fill();

});