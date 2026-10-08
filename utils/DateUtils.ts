export class DateUtils {

  static getExpectedMonth(monthOffset: number): string {

    const date = new Date();

    date.setMonth(date.getMonth() + monthOffset);

    return date.toLocaleString('default', {
      month: 'long',
      year: 'numeric'
    });
  }
  static getDaysInCurrentMonth(): number {

  const date = new Date();

  return new Date(
    date.getFullYear(),
    date.getMonth() + 1,
    0
  ).getDate();
}
}