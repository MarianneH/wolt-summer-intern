import { render, screen, fireEvent } from "@testing-library/react";
import DeliveryFeeCalculator from "./DeliveryFeeCalculator";

function setValueByLabelText(value: string, labelText: string) {
  const inputField = screen.getByLabelText(labelText);
  fireEvent.change(inputField, { target: { value } });
}

describe("DeliverFeeCalculator", () => {
  const foo = { a: "foo", b: "baaar" };
  const { a } = foo;
  // test suite
  it("must be free delivery, when the basket value is 123€", async () => {
    // test case
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("123", "Cart Value in €");
    setValueByLabelText("1200", "Delivery Distance in m");
    setValueByLabelText("10", "Number of Items");
    setValueByLabelText("'2023-02-01T21:17:14'", "Order Time");

    // Action
    const calculateFeeButton = screen.getByText("Calculate Delivery Fee");
    fireEvent.click(calculateFeeButton);

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 0.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
  it("delivery see must be 10€, when the basket value is 2€", async () => {
    // Arrange
    render(<DeliveryFeeCalculator />);
    setValueByLabelText("2", "Cart Value in €");
    setValueByLabelText("1000", "Delivery Distance in m");
    setValueByLabelText("4", "Number of Items");
    setValueByLabelText("'2023-02-01T21:17:14'", "Order Time");

    // Action
    const calculateFeeButton = screen.getByText("Calculate Delivery Fee");
    fireEvent.click(calculateFeeButton);

    // Assertion
    const deliverFeeResult = await screen.findByText("Delivery Fee: 10.00 €");
    expect(deliverFeeResult).toBeInTheDocument();
  });
});
