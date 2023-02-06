import { maxDeliveryFee } from "./_deliveryFeeVariables";

export function deliveryFeeIsMax15(currentDeliveryFee: number): number {
  if (currentDeliveryFee > maxDeliveryFee) {
    return maxDeliveryFee;
  } else {
    return currentDeliveryFee;
  }
}
