import { distanceFeeCalculation } from "./distanceFeeCalculation";

describe("calculateDistanceFees", () => {
  it("should calculate distance Fee to be 2 € for 10m", () => {
    expect(distanceFeeCalculation(10)).toEqual(2);
  });

  it("should calculate distance Fee to be 2 € for 950m", () => {
    expect(distanceFeeCalculation(950)).toEqual(2);
  });

  it("should calculate distance Fee to be 5 € for 2200m", () => {
    expect(distanceFeeCalculation(2200)).toEqual(5);
  });
});
