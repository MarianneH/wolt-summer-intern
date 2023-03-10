import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import React from "react";
import CustomInput from "./CustomInput";

describe("CustomInput", () => {
  const inputRef = React.createRef<HTMLInputElement>();

  it("should render all properties correctly for version distance", () => {
    const { container } = render(
      <CustomInput version="distance" inputRef={inputRef} />
    );

    expect(container).toMatchSnapshot();
  });

  it("should render input with type number if version is not time", () => {
    render(<CustomInput version="amount" inputRef={inputRef} />);

    expect(screen.queryByTestId("amount")?.getAttribute("type")).toEqual(
      "number"
    );
  });

  it("should render input with type datetime-local if version is time", () => {
    render(<CustomInput version="time" inputRef={inputRef} />);

    expect(screen.queryByTestId("time")?.getAttribute("type")).toEqual(
      "datetime-local"
    );
  });

  it("should render input with step 0.01 if version is cartValue", () => {
    render(<CustomInput version="cartValue" inputRef={inputRef} />);

    expect(screen.queryByTestId("cartValue")?.getAttribute("step")).toEqual(
      "0.01"
    );
  });

  it("should render input with step 1 if version is amount", () => {
    render(<CustomInput version="amount" inputRef={inputRef} />);

    expect(screen.queryByTestId("amount")?.getAttribute("step")).toEqual("1");
  });

  it("should render input with min 0.01 if version is cartValue", () => {
    render(<CustomInput version="cartValue" inputRef={inputRef} />);

    expect(screen.queryByTestId("cartValue")?.getAttribute("min")).toEqual(
      "0.01"
    );
  });

  it("should render input with min 1 if version is amount", () => {
    render(<CustomInput version="amount" inputRef={inputRef} />);

    expect(screen.queryByTestId("amount")?.getAttribute("min")).toEqual("1");
  });

  it("should render input label with className active if value is not empty and version is not time", async () => {
    const user = userEvent.setup();

    render(<CustomInput version="amount" inputRef={inputRef} />);
    const label = screen.getByText("Number of Items");
    await user.click(screen.getByTestId("amount"));
    await user.keyboard("9");

    expect(label.classList.contains("active")).toBe(true);
  });

  it("should render input label with className active if version is time", async () => {
    render(<CustomInput version="time" inputRef={inputRef} />);
    const label = screen.getByText("Order Time");
    expect(label.classList.contains("active")).toBe(true);
  });

  it("should render input label without className active if version is distance and without input", async () => {
    render(<CustomInput version="distance" inputRef={inputRef} />);
    const label = screen.getByText("Delivery Distance in m");
    expect(label.classList.contains("active")).not.toBe(true);
  });
});
