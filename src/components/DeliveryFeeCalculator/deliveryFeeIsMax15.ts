export function deliveryFeeIsMax15(currentDeliveryFee: number) {
  if (currentDeliveryFee > 15) {
    return 15;
  } else {
    return currentDeliveryFee;
  }
}
