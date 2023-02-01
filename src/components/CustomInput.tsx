import { RiPinDistanceLine } from "react-icons/ri";
import { AiOutlineEuroCircle } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { TbCalendarTime } from "react-icons/tb";
import React, { useEffect, useState } from "react";
import { StyledInput } from "../styles/CustomInput.styled";

interface CustomInputProps {
  version: "distance" | "amount" | "time" | "cartValue";
  inputRef: React.RefObject<HTMLInputElement>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  version,
  inputRef,
}) => {
  const [hasValue, setHasValue] = useState<Boolean>(false);
  const [labelText, setLabelText] = useState(``);
  const [icon, setIcon] = useState(<></>);

  // check if input has value to handle label position
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHasValue(Boolean(e.target.value));
  }

  // assign the correct label and icon for the version of the input field
  useEffect(() => {
    switch (version) {
      case "distance":
        setLabelText("Delivery Distance in m");
        setIcon(<RiPinDistanceLine />);
        break;
      case "amount":
        setLabelText("Number of Items");
        setIcon(<AiOutlineShoppingCart />);
        break;
      case "time":
        setLabelText("Order Time");
        setIcon(<TbCalendarTime />);
        break;
      case "cartValue":
        setLabelText("Cart Value in €");
        setIcon(<AiOutlineEuroCircle />);
    }
  }, [version]);

  return (
    <StyledInput>
      <input
        onChange={handleInputChange}
        name={version}
        type={version === "time" ? "datetime-local" : "number"}
        min="0"
        step={version === "cartValue" ? "0.01" : "1"}
        required
        ref={inputRef}
      ></input>
      <label className={hasValue || version === "time" ? "active" : ""}>
        {labelText}
      </label>
      <div>{icon}</div>
    </StyledInput>
  );
};

export default CustomInput;
