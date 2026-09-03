import { test, expect } from '@playwright/test';

test('Upload multiple files', async ({ page }) => {

    await page.goto('https://practice.expandtesting.com/upload');

    await page.locator('#fileInput').setInputFiles([
        './Files/Img1.png',
        './Files/Img2.png'
    ]);

    await page.locator('#fileSubmit').click();

    console.log('Files uploaded successfully');
});