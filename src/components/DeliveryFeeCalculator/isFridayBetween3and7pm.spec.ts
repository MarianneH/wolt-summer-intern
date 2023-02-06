import { isFridayBetween3and7pm } from "./isFridayBetween3and7pm";

describe("isFridayBetween3and7pm", () => {
  it("should return true if time is a friday and 18 Berlin (local) time", () => {
    expect(isFridayBetween3and7pm(new Date("2023-02-03T18:00:00"))).toEqual(
      true
    );
  });

  it("should return false if time is a friday and 12 Berlin (local) time", () => {
    expect(isFridayBetween3and7pm(new Date("2023-02-03T12:00:00"))).toEqual(
      false
    );
  });

  it("should return false if time is a monday", () => {
    expect(isFridayBetween3and7pm(new Date("2023-02-06T18:00:00"))).toEqual(
      false
    );
  });
});
