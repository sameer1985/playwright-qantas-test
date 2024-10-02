import { test, expect, chromium } from '@playwright/test';

async function setupPage() {
    const browser = await chromium.launch({        
        args: ["--start-maximized"],
    });
    const context = await browser.newContext();
    const page = await browser.newPage({ viewport: null });
    await page.goto('https://www.qantas.com/hotels');
    return { browser, page };
}

async function searchForHotel(page, location) {
    await page.fill('#location-search-input', location);
    await page.click('#downshift-0-item-0');
    await page.click('a[aria-label="Search hotels"]');
}

async function selectFirstHotel(page) {
    const [newPage] = await Promise.all([
        page.waitForEvent('popup'), // Wait for the new page (popup)
        page.click('div[data-testid="search-results"] div[data-testid="search-result"]:first-of-type'), // Click to open new page
    ]);
    await newPage.waitForSelector('a:has-text("Select")', { state: 'visible' });
    const firstSelectButton = await newPage.locator('a:has-text("Select")').first();
    await firstSelectButton.click();
    return newPage; // Return the new page for further actions
}

async function fillBookingDetails(newPage) {
    // Wait for the title dropdown and select "Mr"
    await newPage.waitForSelector('#title');
    await newPage.selectOption('#title', { label: 'Mr' });

    // Fill in input fields
    await newPage.fill('#firstName', 'John');
    await newPage.fill('#lastName', 'Son');
    await newPage.fill('#emailAddress', 'john.son@test.com');
    await newPage.fill('#phoneNumber', '0444444444');

    // Click the next step button
    await newPage.click('button[data-testid="next-step-button"]');
    
}

test('User can search and book a hotel or tour', async () => {
    const { browser, page } = await setupPage();
    await searchForHotel(page, 'Sydney');
    const newPage = await selectFirstHotel(page);
    await fillBookingDetails(newPage);
    await browser.close(); // Ensure the browser is closed after the test
});
