import { surchargeForCartValueLessThan10Calculation } from "./surchargeForCartValueLessThan10Calculation";

describe("calculateSurchargeForCartValueLessThan10", () => {
  it("should calculate surcharge to be 2€ for cart value 8€", () => {
    expect(surchargeForCartValueLessThan10Calculation(8)).toEqual(2);
  });

  it("should calculate surcharge to be 9.90€ for cart value 0.10€", () => {
    expect(surchargeForCartValueLessThan10Calculation(0.1)).toEqual(9.9);
  });

  it("should calculate surcharge to be 0€ for cart value 11€", () => {
    expect(surchargeForCartValueLessThan10Calculation(11)).toEqual(0);
  });
});
