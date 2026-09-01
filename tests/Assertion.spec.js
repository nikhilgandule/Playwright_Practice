import { test, expect } from '@playwright/test';

test('Important Assertions Demo', async ({ page }) => {

    // Navigate to application
    await page.goto('https://demoqa.com/text-box');

    // URL Assertion
    await expect(page).toHaveURL('https://demoqa.com/text-box');

    // Title Assertion
    await expect(page).toHaveTitle(/DEMOQA/i);

    // Element Visibility Assertion
    await expect(page.locator('#userName')).toBeVisible();

    // Enter Value
    await page.locator('#userName').fill('Nikhil');

    // Value Assertion
    await expect(page.locator('#userName')).toHaveValue('Nikhil');

    // Email Field
    await page.locator('#userEmail').fill('nikhil@test.com');

    // Submit Button Enabled Assertion
    await expect(page.locator('#submit')).toBeEnabled();

    // Click Submit
    await page.locator('#submit').click();

    // Output Text Assertions
    await expect(page.locator('#name')).toContainText('Nikhil');
    await expect(page.locator('#email')).toContainText('nikhil@test.com');

});


test("Assertion Demo", async ({ page }) => {

  await page.goto("https://www.amazon.in");
  
  expect(100).toBe(100);

});

test('Login Test', async ({ page }) => {

    await page.goto('https://the-internet.herokuapp.com/login');

    await page.locator('#username').fill('tomsmith');

    await page.locator('#password').fill('SuperSecretPassword!');

    await page.getByRole('button', { name: 'Login' }).click();

    await expect(page).toHaveURL(/secure/);

    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();

});


