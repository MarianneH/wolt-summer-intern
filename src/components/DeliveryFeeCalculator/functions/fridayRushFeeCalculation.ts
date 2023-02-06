import { isFridayBetween3and7pm } from "./isFridayBetween3and7pm";
import { rushFeeMultiplier } from "./_deliveryFeeVariables";

export function fridayRushFeeCalculation(
  time: Date,
  currentDeliveryFee: number,
  surcharge: number
): number {
  if (isFridayBetween3and7pm(time)) {
    return +((currentDeliveryFee + surcharge) * rushFeeMultiplier).toFixed(2);
  }
  return currentDeliveryFee + surcharge;
}
