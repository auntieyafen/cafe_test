import { test, expect } from '@playwright/test';

test('Click to +5', async ({ page }) => {
    // Navigate to the Count page
    await page.goto('http://localhost:3000/count');

    // Get the initial count
    const initialCount = await page.textContent('.font-semibold');
    const initialCountNumber = Number(initialCount);

    console.log('Initial Count:', initialCountNumber);

    await page.click('button');

    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);
    await page.waitForTimeout(500);

    const updatedCount = await page.textContent('.font-semibold');

    console.log('Updated Count:', updatedCount);

    // Check the Number
    const updatedCountNumber = Number(updatedCount);
    console.log('Expected Count:', initialCountNumber + 5);

    expect(updatedCountNumber).toBe(initialCountNumber + 5);
});