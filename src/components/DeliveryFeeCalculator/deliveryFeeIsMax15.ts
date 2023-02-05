export function deliveryFeeIsMax15(currentDeliveryFee: number): number {
  if (currentDeliveryFee > 15) {
    return 15;
  } else {
    return currentDeliveryFee;
  }
}
