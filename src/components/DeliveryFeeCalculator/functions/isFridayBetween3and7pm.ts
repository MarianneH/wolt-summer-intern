import { rushEnd, rushDay, rushStart } from "./_deliveryFeeVariables";

export function isFridayBetween3and7pm(date: Date): Boolean {
  const d: Date = new Date(date);
  if (d.getUTCDay() !== rushDay) {
    return false;
  }
  const hours: number = Number(d.getUTCHours());
  return hours >= rushStart && hours < rushEnd;
}
