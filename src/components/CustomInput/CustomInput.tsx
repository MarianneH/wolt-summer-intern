import { RiPinDistanceLine } from "react-icons/ri";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { StyledInput } from "./CustomInput.styled";

interface CustomInputProps {
  version: "distance" | "amount" | "time" | "cartValue";
  inputRef: React.RefObject<HTMLInputElement>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  version,
  inputRef,
}) => {
  const [hasValue, setHasValue] = useState<Boolean>(false);
  const [labelText, setLabelText] = useState<string>(``);
  const [icon, setIcon] = useState<JSX.Element>(<></>);

  // check if input has value to handle label position
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHasValue(Boolean(e.target.value));
  }

  // assign the correct label and icon for the version of the input field
  useEffect(() => {
    const labelIcon = new Map();
    labelIcon.set("distance", {
      label: "Delivery Distance in m",
      icon: <RiPinDistanceLine />,
    });
    labelIcon.set("amount", {
      label: "Number of Items",
      icon: <AiOutlineShoppingCart />,
    });
    labelIcon.set("time", {
      label: "Order Time",
      icon: <TbCalendarTime />,
    });
    labelIcon.set("cartValue", {
      label: "Cart Value in €",
      icon: <AiOutlineEuroCircle />,
    });

    const { label, icon } = labelIcon.get(version);
    setIcon(icon);
    setLabelText(label);
  }, [version]);

  return (
    <StyledInput>
      <input
        onChange={handleInputChange}
        name={version}
        id={version}
        type={version === "time" ? "datetime-local" : "number"}
        min="0"
        step={version === "cartValue" ? "0.01" : "1"}
        required
        ref={inputRef}
      ></input>
      <label
        htmlFor={version}
        className={hasValue || version === "time" ? "active" : ""}
      >
        {labelText}
      </label>
      <div>{icon}</div>
    </StyledInput>
  );
};

export default CustomInput;
