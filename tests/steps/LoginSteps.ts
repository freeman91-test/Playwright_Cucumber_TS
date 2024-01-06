import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { pageObject } from "../hooks/PageObject";
import { expect } from "@playwright/test";
setDefaultTimeout(10*1000);

Given("enter orange HRM url", async () => {
  console.log(
    "ORANGE HRM URL: ",
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
  await pageObject.page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
  );
});

Given("enter {string} as an username", async (username) => {
  await pageObject.page.locator("[name='username']").fill(username);
  console.log("Entered username: ", username);
});
Given("enter {string} as a password", async (password) => {
  await pageObject.page.locator("[name='password']").fill(password);
  console.log("Entered password: ", password);
});

When("click on login button", async () => {
  await pageObject.page.locator("[type='submit']").click();
  console.log("Clicked on Login button");
});

Then("user should be able to see home page", async () => {
  console.log("Home page displayed");
  await expect(pageObject.page).toHaveTitle("orange");

});
