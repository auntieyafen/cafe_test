import { test, expect } from '@playwright/test';

test('Visual component renders correctly', async ({ page }) => {
    // Navigate to the page containing the Visual component
    await page.goto('http://localhost:3000/visual');

    const visualComponent = await page.waitForSelector('.bg-customBlue');
    expect(visualComponent).not.toBeNull();

    // There should be 'Hello'
    const helloText = await visualComponent.$('p');
    expect(await helloText.innerText()).toBe('Hello');

    // There should be "Point 1" and "Point 2 XXXX" 
    const point1ListItem = await visualComponent.$('li.marker\\:text-customPink');
    const point2ListItem = await visualComponent.$('li.marker\\:text-customGreen');
    expect(point1ListItem).not.toBeNull();
    expect(point2ListItem).not.toBeNull();
});
