import { render, screen, fireEvent } from "@testing-library/react";
import DeliveryFeeCalculator from "./DeliveryFeeCalculator";

function setValueByLabelText(value: string, labelText: string) {
  const inputField = screen.getByLabelText(labelText);
  fireEvent.change(inputField, { target: { value } });
}
function getButtonByButtonText(buttonText: string) {
  const calculateFeeButton = screen.getByText(buttonText);
  fireEvent.click(calculateFeeButton);
}

describe("DeliverFeeCalculator", () => {
  // test suite
  it("must be free delivery, when the cart value is 123€", async () => {
    // test case
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("123", "Cart Value in €");
    setValueByLabelText("1200", "Delivery Distance in m");
    setValueByLabelText("10", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 0.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 10€ delivery fee, when the cart value is 2€, distance is 1000m, time is not rush hour, amount is 4", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("2", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 10.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 2€ delivery fee, when the cart value is 10€, distance is 1000m, time is not rush hour, amount is 4", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 2.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 3€ delivery fee, when the cart value is 10€, distance is 1499m, time is not rush hour, amount is 4", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1499", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 3.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 4€ delivery fee, when the cart value is 10€, distance is 1501m, time is not rush hour, amount is 4", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1501", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 4.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 2.50€ delivery fee, when the cart value is 10€, distance is 1000m, time is not rush hour, amount is 5", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("5", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 2.50 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 5€ delivery fee, when the cart value is 10€, distance is 1000m, time is not rush hour, amount is 10", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("10", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 5.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 7.70€ delivery fee, when the cart value is 10€, distance is 1000m, time is not rush hour, amount is 13", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("13", "Number of Items");
    setValueByLabelText("2023-02-01T21:17:14", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 7.70 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 2.40€ delivery fee, when the cart value is 10€, distance is 1000m, time is rush hour, amount is 4", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("10", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("2023-02-03T18:06:20", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 2.40 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("must be 15.00€ delivery fee, when the cart value is 1€, distance is 2000m, time is rush hour, amount is 6", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("1", "Cart Value in €");
    setValueByLabelText("2000", "Delivery Distance in m");
    setValueByLabelText("6", "Number of Items");
    setValueByLabelText("2023-02-03T18:06:20", "Order Time");

    // Action
    getButtonByButtonText("Calculate Delivery Fee");

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 15.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });

  // test maxed out version?
  // test wrong input? minus, comma seperated
  // test
});
