import { fridayRushFeeCalculation } from "./fridayRushFeeCalculation";
import { surchargeForCartValueLessThan10Calculation } from "./surchargeForCartValueLessThan10Calculation";
import { amountFeesCalculation } from "./amountFeesCalculation";
import { distanceFeeCalculation } from "./distanceFeeCalculation";
import { deliveryFeeIsMax15 } from "./deliveryFeeIsMax15";
import { freeDelivery } from "./_deliveryFeeVariables";

export function totalDeliveryFeeCalculation(
  cartValue: number,
  distance: number,
  amount: number,
  time: Date
): number {
  // handle free delivery over 100€
  if (cartValue >= freeDelivery) {
    return 0;
  }
  let min10surcharge: number =
    surchargeForCartValueLessThan10Calculation(cartValue);
  let distanceFees: number = distanceFeeCalculation(distance);
  let amountFees: number = amountFeesCalculation(amount);
  let feesAfterFridayRush = fridayRushFeeCalculation(
    time,
    distanceFees + amountFees,
    min10surcharge
  );
  let finalFees = deliveryFeeIsMax15(feesAfterFridayRush);

  return finalFees;
}
