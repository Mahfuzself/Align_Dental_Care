import { test,expect } from "@playwright/test";
test("Validate successfully login in Admin",async({page})=>{
    //await page.waitForTimeout(7000)
    await page.goto("https://dev.aligndentalcare.com/")
})