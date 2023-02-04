export function calculateSurchargeForCartValueLessThan10(
  cartValue: number
): number {
  if (cartValue < 10) {
    return +(10 - cartValue).toFixed(2);
  }
  return 0;
}
