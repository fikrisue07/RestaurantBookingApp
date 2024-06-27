const puppeteer = require('puppeteer');

describe('Frontend Tests', () => {
    let browser;
    let page;

    beforeAll(async () => {
        browser = await puppeteer.launch();
        page = await browser.newPage();
    });

    afterAll(async () => {
        await browser.close();
    });

    test('loads the home page', async () => {
        await page.goto('http://localhost:3000');
        await page.waitForSelector('h1');
        const title = await page.$eval('h1', e => e.textContent);
        expect(title).toBe('Restaurant Booking');
    });

    test('can make a reservation', async () => {
        await page.goto('http://localhost:3000');
        await page.type('#username', 'testuser');
        await page.type('#restaurant', 'Restaurant A');
        await page.type('#date', '2024-07-01T19:00');
        await page.type('#guests', '2');
        await page.click('#submit');
        await page.waitForSelector('.reservation');
        const reservation = await page.$eval('.reservation', e => e.textContent);
        expect(reservation).toContain('testuser');
    });
});

