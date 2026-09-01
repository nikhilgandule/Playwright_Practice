import{test, expect} from '@playwright/test'

test("Varify Error Message", async ({page})=>{

   await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

  // test.use({viewport:{width:1280,height:800}});

   await page.getByPlaceholder("Username").fill("Admin");

   await page.getByPlaceholder("Password").fill("TimePass");

   await page.locator("//button[@type='submit']").click();

   const msg = await page.locator("//p[contains(@class,'oxd-alert')]").textContent();
   //const msg = await page.locator("p[class*='oxd-alert']").textContent();

   console.log("Error Message : "+msg);

   expect(msg.includes('Invalid')).toBeTruthy();

   expect(msg === "Invalid credentials").toBeTruthy();

})