import { calculateDistanceFees } from "./calculateDistanceFees";

describe("calculateDistanceFees", () => {
  it("should calculate distance Fee to be 2 € for 10m", () => {
    expect(calculateDistanceFees(10)).toEqual(2);
  });

  it("should calculate distance Fee to be 2 € for 950m", () => {
    expect(calculateDistanceFees(950)).toEqual(2);
  });

  it("should calculate distance Fee to be 5 € for 2200m", () => {
    expect(calculateDistanceFees(2200)).toEqual(5);
  });
});
