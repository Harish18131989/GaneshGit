import { chromium, test } from '@playwright/test'
test('multiple context', async ({ }) => {
  const browser = await chromium.launch({
    headless: false
});
  const context1 = await browser.newContext();
  const page1 = await context1.newPage();
  const page2 = await context1.newPage();
  const page3 = await context1.newPage();
  
  //to record vedio in script 
  const context2 = await browser.newContext({recordVideo:{dir:'videos/'}});
  const pagesecond = await context2.newPage();
  
  //three url navigation
  await page1.goto("https://www.instagram.com/")
  await page2.goto("https://petstore.swagger.io/");
  await page3.goto("https://github.com/Harish18131989/Moorthy");
  await pagesecond.goto('https://www.instagram.com/');
  await pagesecond.goto('https://www.facebook.com/');
  await pagesecond.goto('https://www.w3schools.com/');
  await pagesecond.goBack();
  await pagesecond.goBack();
  await pagesecond.screenshot({ path: "./image.png" });

  await context1.close();
await context2.close();
await browser.close();
})