import { expect, test } from "./test";

test("home renders core landmarks and hero", async ({ page }) => {
  await page.goto("/");

  const primaryNav = page
    .getByRole("navigation")
    .filter({ has: page.getByRole("link", { name: /Damian Rusek/i }) })
    .first();

  await expect(primaryNav).toBeVisible();
  await expect(page.getByRole("main")).toBeVisible();

  await expect(page.getByRole("heading", { level: 1 })).toContainText("Damian Rusek");
  await expect(page.getByRole("link", { name: "Get in Touch" })).toBeVisible();
  await expect(page.getByRole("link", { name: "View Projects" })).toBeVisible();
});
