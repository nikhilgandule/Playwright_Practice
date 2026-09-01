import{test, expect} from '@playwright/test'

test("Orange HRM Login ", async({page}) => {

    await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

    await page.getByPlaceholder("Username").fill("Admin",{delay:300});

    await page.locator("input[name = 'password']").fill("admin123",{delay:300});

    await page.locator("//button[@type='submit']").click();

    //await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/dashboard/);

    await page.getByAltText("profile picture").click();

    await page.getByText("Logout").click();

    //await page.waitForTimeout(3000);

    await expect(page).toHaveURL(/login/);

});

