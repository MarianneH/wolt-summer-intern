export function calculateAmountFees(amount: number) {
  if (amount >= 13) {
    return 1.2 + (amount - 4) * 0.5;
  } else if (amount >= 5) {
    return (amount - 4) * 0.5;
  }
  return 0;
}
