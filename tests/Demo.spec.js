import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).fill('Nikhil Gandule');
  await page.goto('https://www.google.com/sorry/index?continue=https://www.google.com/search%3Fsafe%3Dactive%26q%3DNikhil%2BGandule%26sca_esv%3D08f192c6c7bcf04a%26sxsrf%3DAPpeQntj82OP7Op1teEQeM5ufeH0uzPtHg%253A1786537400330%26source%3Dhp%26ei%3DuGV8arGwErKQseMP3-XOiQY%26iflsig%3DABILxe8AAAAAanxzyLRbOaQ--I18tXMVF7CbvafgFexD%26ved%3D0ahUKEwix7P24ipuWAxUySGwGHd-yM2EQ4dUDCA4%26uact%3D5%26oq%3DNikhil%2BGandule%26gs_lp%3DEgdnd3Mtd2l6Ig5OaWtoaWwgR2FuZHVsZTIFECEYoAEyBRAhGKABSPw3UKENWOwkcAF4AJABAJgBrwGgAcAMqgEEMC4xNLgBA8gBAPgBAZgCD6ACgQ2oAgrCAgoQABgDGI8BGOoCwgIKEC4YAxiPARjqAsICBRAAGIAEwgILEAAYgAQYsQMYgwHCAhEQLhiABBixAxiDARjHARjRA8ICDhAAGIAEGIoFGLEDGIMBwgIOEC4YgAQYsQMYxwEY0QPCAggQABiABBixA8ICCBAuGIAEGLEDwgIOEC4YgAQYigUYsQMYgwHCAgsQLhiABBixAxiDAcICBRAuGIAEwgIQEC4YgAQYigUYsQMYgwEYCsICBhAAGBYYHsICBxAAGIAEGA3CAgcQLhgNGIAEmAMH8QWZCgtxB31WvJIHBDEuMTSgB_yYAbIHBDAuMTS4B_oMwgcFMS45LjXIByiACAE%26sclient%3Dgws-wiz%26sei%3Dw2V8aqXQAdybhvcP7LaG2AE%26safe%3Dactive&q=EgSnZ3lsGMPL8dMGIjA-XwO_bZgXFt-Xtinzx_aQ_sQC_i3hhAaRVQTSLEcYPU8H8kxylHQhYaiX6JL9dQEyAVJaAUM');
  await page.locator('iframe[name="a-rcgfj8e2b0om"]').contentFrame().getByRole('checkbox', { name: 'I\'m not a robot' }).click();
  await page.goto('https://www.google.com/');
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByRole('combobox', { name: 'Search' }).click();
  await page.getByText('v videos').click();
  await page.getByRole('link', { name: 'About' }).click();
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'See what\'s new' }).click();
  const page2 = await page2Promise;
});


/*
import { test } from '@playwright/test';

test('Google About and popup', async ({ page }) => {
  await page.goto('https://www.google.com/');

  await page.getByRole('link', { name: 'About' }).click();

  const popupPromise = page.waitForEvent('popup');
  await page.getByRole('link', { name: "See what's new" }).click();
  const popup = await popupPromise;

  await popup.waitForLoadState();

  console.log(await popup.title());
});
*/