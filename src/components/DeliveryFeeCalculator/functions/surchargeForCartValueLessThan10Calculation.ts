import { smallOrder } from "./_deliveryFeeVariables";

export function surchargeForCartValueLessThan10Calculation(
  cartValue: number
): number {
  if (cartValue < smallOrder) {
    return +(smallOrder - cartValue).toFixed(2);
  }
  return 0;
}
