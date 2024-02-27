import { test, expect } from '@playwright/test';

test('Click to +5', async ({ page }) => {
    // Navigate to the Count page
    await page.goto('http://localhost:3000/count');

    // Get the initial count
    const initialCount = await page.textContent('.font-semibold');

    await page.click('button');

    await page.waitForTimeout(2500);

    const updatedCount = await page.textContent('.font-semibold');

    // Chech the Number
    expect(Number(updatedCount)).toBe(Number(initialCount) + 5);
});
