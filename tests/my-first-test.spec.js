
import { test, expect } from '@playwright/test';

test('my first playwright test', async ({ page }) => {
    await page.goto('https://www.google.com');
    
    await page.waitForTimeout(2000);
    
    await page.screenshot({ path: 'google-homepage.png' });
    
    console.log('Test completed! ✅');
});

test ( 'me second test', async ({page}) => {
    await page.goto ('https://www.wikipedia.org');
    await page.waitForTimeout ( 2000 ) ;
    await page.screenshot ({path : 'wikipedia-homepage.png'});

    console.log('second test completed! ✅');

});

 test('search in wikipedia', async ({ page }) => {
    await page.goto('https://www.wikipedia.org');
    
    await page.fill('#searchInput', 'Playwright');
    
    await page.click('button[type="submit"]');
    
    await page.waitForTimeout(2000);
    
    await page.screenshot({ path: 'wikipedia-search.png' });
    
    console.log('Search completed! 🔍');
});

test('testNew', async ({ page }) => {
  await page.goto('https://www.wikipedia.org/');
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).click();
  await page.getByRole('searchbox', { name: 'Search Wikipedia' }).fill('adida');
  await page.getByRole('link', { name: 'Hadid Moshav in central Israel' }).click();
  await page.getByRole('link', { name: 'History', exact: true }).click();
  await page.getByRole('radio', { name: 'Small' }).check();
  await page.locator('label').filter({ hasText: 'Large' }).click();
  await page.locator('#skin-client-pref-vector-feature-limited-width-value-1').check();
  await page.getByRole('link', { name: 'Archaeology' }).click();
  await page.getByRole('link', { name: 'Hapoel HaMizrachi' }).nth(1).click();
});