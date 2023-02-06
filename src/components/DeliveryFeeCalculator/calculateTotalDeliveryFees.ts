import { calculateFridayRushFee } from "./calculateFridayRushFee";
import { calculateSurchargeForCartValueLessThan10 } from "./calculateSurchargeForCartValueLessThan10";
import { calculateAmountFees } from "./calculateAmountFees";
import { calculateDistanceFees } from "./calculateDistanceFees";
import { deliveryFeeIsMax15 } from "./deliveryFeeIsMax15";

export function calculateTotalDeliveryFees(
  cartValue: number,
  distance: number,
  amount: number,
  time: Date
): number {
  // handle free delivery over 100€
  if (cartValue >= 100) {
    return 0;
  }
  let min10surcharge: number =
    calculateSurchargeForCartValueLessThan10(cartValue);
  let distanceFees: number = calculateDistanceFees(distance);
  let amountFees: number = calculateAmountFees(amount);
  let feesAfterFridayRush = calculateFridayRushFee(
    time,
    distanceFees + amountFees,
    min10surcharge
  );
  let finalFees = deliveryFeeIsMax15(feesAfterFridayRush);

  return finalFees;
}
