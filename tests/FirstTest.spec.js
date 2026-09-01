// import { test, expect } from '@playwright/test';

// test('Google Test', async ({ page }) => {
//     await page.goto('https://google.com');

//     test.use({viewport:{width:1280,height:800}});

//     await page.fill('textarea[name="q"]', 'Playwright');
//     await page.press('textarea[name="q"]', 'Enter');

//     await expect(page).toHaveURL(/search/);
// });

import { test, expect } from '@playwright/test';

test.use({
  viewport: {
    width: 1280,
    height: 800
  }
});

test('Google search', async ({ page }) => {
  await page.goto('https://www.google.com');

  const searchBox = page.locator('textarea[name="q"]');
  await searchBox.fill('Playwright');
  await searchBox.press('Enter');

  await expect(page).toHaveURL(/search/);
});