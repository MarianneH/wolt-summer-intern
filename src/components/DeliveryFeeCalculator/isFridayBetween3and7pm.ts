function isFridayBetween3and7pm(date: Date): Boolean {
  const d: Date = new Date(date);
  if (d.getUTCDay() !== 5) {
    return false;
  }
  const hours: number = Number(d.getUTCHours());
  return hours >= 15 && hours < 19;
}
export function calculateFridayRushFee(
  time: Date,
  deliveryFeeTemp: number,
  surcharge: number
): number {
  if (isFridayBetween3and7pm(time)) {
    return +((deliveryFeeTemp + surcharge) * 1.2).toFixed(2);
  }
  return deliveryFeeTemp + surcharge;
}
