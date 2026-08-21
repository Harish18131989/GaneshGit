import{test,expect} from '@playwright/test';
test('Locators', async({page})=>
{
    await page.goto("https://www.amazon.com/");
    await page.locator("#twotabsearchtextbox").fill("iphones");
    await page.waitForTimeout(3000);
    await page.locator("#nav-search-submit-button").click();
})