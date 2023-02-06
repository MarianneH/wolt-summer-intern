import { calculateFridayRushFee } from "./calculateFridayRushFee";

describe("calculateFridayRushFee", () => {
  it("should calculate delivery fee to be 1€ for currentDeliveryFee being 1€, surcharge being 0€ and no friday rush hour", () => {
    expect(
      calculateFridayRushFee(new Date("2023-02-01T21:00:00"), 1, 0)
    ).toEqual(1);
  });

  it("should calculate delivery fee to be 5€ for currentDeliveryFee being 1€, surcharge being 4€ and no friday rush hour", () => {
    expect(
      calculateFridayRushFee(new Date("2023-02-01T21:00:00"), 1, 4)
    ).toEqual(5);
  });

  it("should calculate delivery fee to be 1.20€ for currentDeliveryFee being 1€, surcharge being 0€ and friday rush hour", () => {
    expect(
      calculateFridayRushFee(new Date("2023-02-03T18:00:00"), 1, 0)
    ).toEqual(1.2);
  });

  it("should calculate delivery fee to be 15€ for currentDeliveryFee being 4€, surcharge being 9€ and friday rush hour", () => {
    expect(
      calculateFridayRushFee(new Date("2023-02-03T18:00:00"), 4, 9)
    ).toEqual(15.6);
  });
});
