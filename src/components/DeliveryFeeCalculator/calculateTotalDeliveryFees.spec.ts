import { calculateAmountFees } from "./calculateAmountFees";
import { calculateTotalDeliveryFees } from "./calculateTotalDeliveryFees";

jest.mock("./calculateAmountFees");
describe("calculateTotalDeliveryFees", () => {
  const calculateAmountFeesMock = calculateAmountFees as jest.Mock;
  it("should ", () => {
    // calculateAmountFeesMock.mockReturnValue(4);

    calculateTotalDeliveryFees(1, 2, 3, new Date());

    expect(calculateAmountFeesMock).toHaveBeenCalledWith(3);
  });
});
