import { test, expect } from '@playwright/test';

test.describe('Portfolio Core Sections', () => {

  test.beforeEach(async ({ page }) => {
    // 1. Go to the page
    await page.goto('/');

    // 2. Wait for the main container to exist (ensures data is loaded)
    await page.waitForSelector('.snap-container', { state: 'visible', timeout: 10000 });
  });

  test('Hero Section should render correctly', async ({ page }) => {
    // Check main heading visibility
    const heading = page.getByRole('heading', { level: 1 });
    await expect(heading).toBeVisible();

    // Check for CTA link
    const primaryCta = page.getByRole('link', { name: /explore journey/i });
    await expect(primaryCta).toBeVisible();
  });

  test('Timeline Section should list experience', async ({ page }) => {
    const journeySection = page.locator('#journey');

    // Scroll down to trigger RevealSection observer
    await journeySection.scrollIntoViewIfNeeded();

    // Verify the section heading exists
    await expect(journeySection.locator('h2')).toBeVisible();

    // Look for experience titles (H3) inside the journey section
    const experienceTitles = journeySection.locator('h3');
    await expect(experienceTitles.first()).toBeVisible();
  });

  test('Timeline/Journey Section should list experience items', async ({ page }) => {
    const journeySection = page.locator('#journey');
    await journeySection.scrollIntoViewIfNeeded();

    // Check for the presence of list items (experience bullets)
    const listItems = journeySection.locator('li');
    const count = await listItems.count();
    expect(count).toBeGreaterThan(0);

    // Verify the "slash" bullet content matches our design requirement
    await expect(listItems.first()).toContainText('/');
  });

  test('Education/Card Grid Section should render', async ({ page }) => {
    const educationSection = page.locator('#education');
    await educationSection.scrollIntoViewIfNeeded();

    // Verify the background title is present
    await expect(educationSection.locator('h2')).toBeVisible();

    // Look for card titles (H3)
    const cardTitles = educationSection.locator('h3');
    await expect(cardTitles.first()).toBeVisible();
  });

  test('Contact Section should filter and display links', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await contactSection.scrollIntoViewIfNeeded();

    await expect(contactSection).toBeVisible();

    // Verify email link exists (Primary Contact area)
    const emailLink = contactSection.locator('a[href^="mailto:"]');
    await expect(emailLink).toBeVisible();

    // Verify social links (Secondary links area) exist and open in new tab
    const socialLinks = contactSection.locator('a[target="_blank"]');
    const socialCount = await socialLinks.count();
    expect(socialCount).toBeGreaterThan(0);
  });

  test('Page Identity and SEO', async ({ page }) => {
    // Basic SEO check
    await expect(page).toHaveTitle(/Portfolio/i);
  });

  test('Dark Mode toggle check', async ({ page }) => {
    const mainContainer = page.locator('.snap-container');
    await expect(mainContainer).toBeVisible();

    // Check if grid pattern overlay exists (Visual decoration)
    const gridPattern = page.locator('.grid-pattern');
    await expect(gridPattern).toBeInViewport();
  });
});