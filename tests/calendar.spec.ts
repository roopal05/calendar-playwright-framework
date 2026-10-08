import { test, expect } from '@playwright/test';
import { CalendarPage } from '../pages/CalendarPage';
import { DateUtils } from '../utils/DateUtils';
import { calendarTestData } from '../test-data/calendarData';

let calendarPage: CalendarPage;

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  calendarPage = new CalendarPage(page);
});

test('User should be able to navigate to previous month', async ({ page }) => {

  const calendarPage = new CalendarPage(page);

  await calendarPage.clickPreviousMonth();

  const previousMonth = await calendarPage.getMonthYear();

 const expectedMonth = DateUtils.getExpectedMonth(
  calendarTestData.monthOffsetPrevious
);

  expect(previousMonth).toBe(expectedMonth);
});


test('Calendar should display correct number of days', async ({ page }) => {

  await page.goto('/');

  const calendarPage = new CalendarPage(page);

  const numberOfDays = await calendarPage.getNumberOfDays();

 const expectedDays = DateUtils.getDaysInCurrentMonth();
  expect(numberOfDays).toBe(expectedDays);

});


test('User should be able to navigate to next month', async ({ page }) => {

  await page.goto('/');

  const calendarPage = new CalendarPage(page);

  await calendarPage.clickNextMonth();

  const nextMonth = await calendarPage.getMonthYear();

  const expectedMonth = DateUtils.getExpectedMonth(
  calendarTestData.monthOffsetNext
);

  expect(nextMonth).toBe(expectedMonth);

});
for (const monthOffset of calendarTestData.validMonthOffsets) {

  test(`Calendar should navigate ${monthOffset} month(s)`, async ({ page }) => {

    const calendarPage = new CalendarPage(page);

    const expectedMonth = DateUtils.getExpectedMonth(monthOffset);

    if (monthOffset < 0) {
      for (let i = 0; i < Math.abs(monthOffset); i++) {
        await calendarPage.clickPreviousMonth();
      }
    }

    if (monthOffset > 0) {
      for (let i = 0; i < monthOffset; i++) {
        await calendarPage.clickNextMonth();
      }
    }

    const actualMonth = await calendarPage.getMonthYear();

    expect(actualMonth).toBe(expectedMonth);

  });
}