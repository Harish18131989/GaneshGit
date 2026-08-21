import { test, expect } from '@playwright/test'
test(" demo qa", async ({ page }) => {
    page.goto("https://demoqa.com/automation-practice-form");
    await page.locator("#firstName").fill("Harish");
    await page.locator("#lastName").fill("Baskar")
    await page.getByPlaceholder("name@example.com").fill("harish1813@gmail.com");
    // await page.locator("//input[@value='Male']").check();
    await page.getByRole('radio', { name: 'Male', exact: true }).click();
    await page.getByPlaceholder("Mobile Number").fill("9876543210");
    const dob = page.locator("#dateOfBirthInput")
    await dob.fill("18 Feb 1989")
    await dob.press("Enter");
    const subject = page.locator("#subjectsInput");
    await subject.fill("English");
    await subject.press("Enter");
    await page.waitForTimeout(3000);
    // await page.locator("//input[@id='hobbies-checkbox-1']").check();
    await page.getByRole('checkbox', { name: 'Music' }).check();
    await page.getByPlaceholder("Current Address").fill("Chennai 6000028");
    //dropdown
    await page.waitForLoadState();
    await page.locator("//div[text()='Select State']//following-sibling::div").click();
    // await page.locator("//div[text()='Rajasthan']").click();
    const rajasthan = page.getByText('Rajasthan');
    await rajasthan.waitFor({ state: 'visible' });
    await rajasthan.click();
    //dropdown2
    await page.locator("//div[text()='Select City']//following-sibling::div").click();
    const dd2=page.locator("(//div[@role='option'])[1]");
    await dd2.waitFor({ state: 'visible' });
    await dd2.click();
    page.screenshot({ path: "demoqa.png" });

})