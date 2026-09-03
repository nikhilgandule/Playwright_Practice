import{test, expect} from '@playwright/test';

test("File Upload Test", async({page})=>{

    await page.goto("https://practice.expandtesting.com/upload");

    await page.locator("#fileInput").setInputFiles("./Files/Img1.png");

    await page.locator("#fileSubmit").click();

    expect(await page.locator("h1")).toHaveText('File Uploaded!');

    let test = await page.locator("//h1").textContent();

    console.log(test);
    
});
