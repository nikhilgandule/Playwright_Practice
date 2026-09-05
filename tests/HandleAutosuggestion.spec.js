import{test, expect} from '@playwright/test'

test("Handle Autosuggestion" ,async({page})=>{

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("Playwright");

    await page.waitForSelector("//li[@role='presentation']");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("ArrowDown");

    await page.keyboard.press("Enter");
 
});

test.only("Handle Autosuggestions using loop", async({page})=>{

    await page.goto("https://www.google.com/");

    await page.locator("textarea[name='q']").fill("mobile 5g");

    await page.waitForSelector("//li[@role='presentation']");

    const elements = await page.$$("//li[@role='presentation']");

    for(let i=0; i<elements.length; i++){

        let test = await elements[i].textContent();

        if(test.includes("flipkart")){

            await elements[i].click();
            break;
        }
    }
});
