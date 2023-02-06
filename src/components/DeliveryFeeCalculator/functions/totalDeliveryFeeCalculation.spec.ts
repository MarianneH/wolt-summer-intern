import { amountFeesCalculation } from "./amountFeesCalculation";
import { distanceFeeCalculation } from "./distanceFeeCalculation";
import { totalDeliveryFeeCalculation } from "./totalDeliveryFeeCalculation";
import { surchargeForCartValueLessThan10Calculation } from "./surchargeForCartValueLessThan10Calculation";

jest.mock("./amountFeesCalculation");
jest.mock("./distanceFeeCalculation");
jest.mock("./surchargeForCartValueLessThan10Calculation");
describe("calculateTotalDeliveryFees", () => {
  const amountFeesCalculationMock = amountFeesCalculation as jest.Mock;
  const distanceFeeCalculationMock = distanceFeeCalculation as jest.Mock;
  const surchargeForCartValueLessThan10CalculationMock =
    surchargeForCartValueLessThan10Calculation as jest.Mock;

  it("should call prop 3 when calling calculateAmoutFees function", () => {
    totalDeliveryFeeCalculation(1, 2, 3, new Date());

    expect(amountFeesCalculationMock).toHaveBeenCalledWith(3);
  });

  it("should call prop 2 when calling calculateDistanceFees function", () => {
    totalDeliveryFeeCalculation(1, 2, 3, new Date());

    expect(distanceFeeCalculationMock).toHaveBeenCalledWith(2);
  });

  it("should call prop 1 when calling calculateSurchargeForCartValueLessThan10 function", () => {
    totalDeliveryFeeCalculation(1, 2, 3, new Date());

    expect(surchargeForCartValueLessThan10CalculationMock).toHaveBeenCalledWith(
      1
    );
  });
});
