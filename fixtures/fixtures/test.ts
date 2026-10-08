import { test as base, expect } from '@playwright/test';
import { CalendarPage } from '../pages/CalendarPage';

export const test = base.extend<{
  calendarPage: CalendarPage;
}>({
  calendarPage: async ({ page }, use) => {
    const calendarPage = new CalendarPage(page);
    await use(calendarPage);
  },
});

export { expect };