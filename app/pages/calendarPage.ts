import { Page, Locator } from '@playwright/test';

export class CalendarPage {
  readonly page: Page;
  readonly previousButton: Locator;
  readonly nextButton: Locator;
  readonly monthYear: Locator;

  constructor(page: Page) {
    this.page = page;

    this.previousButton = page.locator('#previous');
    this.nextButton = page.locator('#next');
    this.monthYear = page.locator('#monthYear');
  }

  async clickPreviousMonth() {
    await this.previousButton.click();
  }

  async clickNextMonth() {
    await this.nextButton.click();
  }

  async getMonthYear() {
    return await this.monthYear.textContent();
  }
}