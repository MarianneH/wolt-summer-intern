import { calculateSurchargeForCartValueLessThan10 } from "./calculateSurchargeForCartValueLessThan10";

describe("calculateSurchargeForCartValueLessThan10", () => {
  it("should calculate surcharge to be 2€ for cart value 8€", () => {
    expect(calculateSurchargeForCartValueLessThan10(8)).toEqual(2);
  });

  it("should calculate surcharge to be 9.90€ for cart value 0.10€", () => {
    expect(calculateSurchargeForCartValueLessThan10(0.1)).toEqual(9.9);
  });

  it("should calculate surcharge to be 0€ for cart value 11€", () => {
    expect(calculateSurchargeForCartValueLessThan10(11)).toEqual(0);
  });
});
