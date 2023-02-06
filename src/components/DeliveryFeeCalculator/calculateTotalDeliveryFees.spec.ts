import { calculateAmountFees } from "./calculateAmountFees";
import { calculateDistanceFees } from "./calculateDistanceFees";
import { calculateTotalDeliveryFees } from "./calculateTotalDeliveryFees";
import { calculateSurchargeForCartValueLessThan10 } from "./calculateSurchargeForCartValueLessThan10";

jest.mock("./calculateAmountFees");
jest.mock("./calculateDistanceFees");
jest.mock("./calculateSurchargeForCartValueLessThan10");
describe("calculateTotalDeliveryFees", () => {
  const calculateAmountFeesMock = calculateAmountFees as jest.Mock;
  const calculateDistanceFeesMock = calculateDistanceFees as jest.Mock;
  const calculateSurchargeForCartValueLessThan10Mock =
    calculateSurchargeForCartValueLessThan10 as jest.Mock;

  it("should call prop 3 when calling calculateAmoutFees function", () => {
    calculateTotalDeliveryFees(1, 2, 3, new Date());

    expect(calculateAmountFeesMock).toHaveBeenCalledWith(3);
  });

  it("should call prop 2 when calling calculateDistanceFees function", () => {
    calculateTotalDeliveryFees(1, 2, 3, new Date());

    expect(calculateDistanceFeesMock).toHaveBeenCalledWith(2);
  });

  it("should call prop 1 when calling calculateSurchargeForCartValueLessThan10 function", () => {
    calculateTotalDeliveryFees(1, 2, 3, new Date());

    expect(calculateSurchargeForCartValueLessThan10Mock).toHaveBeenCalledWith(
      1
    );
  });
});
