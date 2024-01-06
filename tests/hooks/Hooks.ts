import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Page, chromium, Browser } from "@playwright/test";
import { pageObject } from "./PageObject";
import { Context } from "vm";

let browser: Browser;
let context: Context;

BeforeAll(async function () {
  browser = await chromium.launch({ headless: false });
  context = await browser.newContext();
});

Before(async function () {
  const page = await browser.newPage();
  pageObject.page = page;
});

After(async function ({ pickle, result }) {
  console.log(result?.status);

  if (result?.status == Status.FAILED) {
    const img = await pageObject.page.screenshot({
      path: `./test-result/screenshots/${pickle.name}`,
      type: "png",
    });
    await this.attach(img, "image/png");
  }
  await context.close();
  await pageObject.page.close();
});

AfterAll(async function () {
  await browser.close();
});
