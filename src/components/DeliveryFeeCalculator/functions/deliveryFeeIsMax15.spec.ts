import { deliveryFeeIsMax15 } from "./deliveryFeeIsMax15";

describe("deliveryFeeIsMax15", () => {
  it("should return 15€ if current delivery fee is 20", () => {
    expect(deliveryFeeIsMax15(20)).toEqual(15);
  });

  it("should return 14.99€ if current delivery fee is 14.99", () => {
    expect(deliveryFeeIsMax15(14.99)).toEqual(14.99);
  });

  it("should return 1€ if current delivery fee is 1", () => {
    expect(deliveryFeeIsMax15(1)).toEqual(1);
  });
});
