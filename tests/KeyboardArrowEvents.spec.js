import{test, expect} from "@playwright/test"

test("Keyboard Arrows Events", async({page})=>{

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").focus();

    await page.keyboard.type("Nikhil Gandule");

    await page.keyboard.press("ArrowLeft"); 

    await page.keyboard.down("Shift");

    for(let i=0; i<'Gandule'.length; i++){

        await page.keyboard.press("ArrowLeft");
    }

    await page.keyboard.up("Shift");

    await page.keyboard.press("Backspace");

});