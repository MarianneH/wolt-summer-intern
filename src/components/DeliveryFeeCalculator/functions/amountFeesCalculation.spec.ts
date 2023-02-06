import { amountFeesCalculation } from "./amountFeesCalculation";

describe("calculateAmountFees", () => {
  it("should calculate amount fee to be 5.70€ for amount >= 13", () => {
    expect(amountFeesCalculation(13)).toEqual(5.7);
  });

  it("should calculate amount fee to be 1€ for amount > 4 && < 13", () => {
    expect(amountFeesCalculation(6)).toEqual(1);
  });

  it("should calculate amount fee to be 0€ for amount <= 4", () => {
    expect(amountFeesCalculation(3)).toEqual(0);
  });
});
