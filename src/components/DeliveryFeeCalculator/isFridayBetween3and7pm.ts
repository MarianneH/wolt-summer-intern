export function isFridayBetween3and7pm(date: Date): Boolean {
  const d: Date = new Date(date);
  if (d.getUTCDay() !== 5) {
    return false;
  }
  const hours: number = Number(d.getUTCHours());
  return hours >= 15 && hours < 19;
}
