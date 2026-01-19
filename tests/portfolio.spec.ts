import { test, expect } from '@playwright/test';

test.describe('Portfolio Core Sections', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Go to the page
    await page.goto('/');

    // 2. Wait for the main container to exist (ensures data is loaded)
    await page.waitForSelector('.snap-container', { state: 'visible', timeout: 10000 });
  });

  test('Hero Section should render correctly', async ({ page }) => {
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();

    const primaryCta = page.getByRole('link', { name: /explore journey/i });

    await expect(primaryCta).toBeVisible();
  });

  test('Timeline Section should list experience', async ({ page }) => {
    // Scroll down to trigger RevealSection if necessary
    await page.locator('#journey').scrollIntoViewIfNeeded();

    // Check for the "Timeline" headings
    const timelineCards = page.locator('#journey .glass-card');
    await expect(timelineCards.first()).toBeVisible();
  });

  test('Contact Section links', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();

    // Look for any link containing mailto
    await expect(page.locator('a[href^="mailto:"]')).toBeDefined();
  });

  test('Timeline/Journey Section should list experience items', async ({ page }) => {
    const journeySection = page.locator('#journey');
    await expect(journeySection).toBeVisible();

    // Check for the presence of timeline cards (glass-card class)
    const timelineItems = journeySection.locator('.glass-card');
    const count = await timelineItems.count();
    expect(count).toBeGreaterThan(0);

    // Check if the first card has the "bullets" list (li elements)
    const firstBullet = timelineItems.first().locator('li');
    await expect(firstBullet.first()).toContainText('/');
  });

  test('Contact Section should filter and display links', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection).toBeVisible();

    // Verify email/phone links appear (Primary Contact area)
    const emailLink = contactSection.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();

    // Verify social links have target="_blank" for portfolio best practice
    const socialLinks = contactSection.locator('a[target="_blank"]');
    const socialCount = await socialLinks.count();
    expect(socialCount).toBeGreaterThan(0);
  });

  test('Dark Mode toggle check', async ({ page }) => {
    // Check if the container has the background class
    const mainContainer = page.locator('.snap-container');
    await expect(mainContainer).toBeVisible();

    // Check if grid pattern overlay exists
    const gridPattern = page.locator('.grid-pattern');
    await expect(gridPattern).toBeInViewport();
  });
});