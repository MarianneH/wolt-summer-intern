import { isFridayBetween3and7pm } from "./isFridayBetween3and7pm";

export function calculateFridayRushFee(
  time: Date,
  currentDeliveryFee: number,
  surcharge: number
): number {
  if (isFridayBetween3and7pm(time)) {
    return +((currentDeliveryFee + surcharge) * 1.2).toFixed(2);
  }
  return currentDeliveryFee + surcharge;
}
