import {
  amountFeeFree,
  bulkAmount,
  bulkAmountSurcharge,
  bulkFeePerItem,
} from "./_deliveryFeeVariables";

export function amountFeesCalculation(amount: number): number {
  if (amount >= bulkAmount) {
    return bulkAmountSurcharge + (amount - amountFeeFree) * bulkFeePerItem;
  } else if (amount > amountFeeFree) {
    return (amount - amountFeeFree) * bulkFeePerItem;
  }
  return 0;
}
