import {test,expect} from '@playwright/test';

test("verify Insta gram url ", async({page})=>
{
    await page.goto("https://www.instagram.com/");
   console.log( await page.url());
   console.log(await page.title());
  await expect(page).toHaveURL('https://www.instagram.com/');
  await expect(page).toHaveTitle("Instagram");
   
})