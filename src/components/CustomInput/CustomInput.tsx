import React, { useState } from "react";
import { StyledInput } from "./CustomInput.styled";
import { labelIcon } from "./labelIcon";

interface CustomInputProps {
  version: "distance" | "amount" | "time" | "cartValue";
  inputRef: React.RefObject<HTMLInputElement>;
}

export const CustomInput: React.FC<CustomInputProps> = ({
  version,
  inputRef,
}) => {
  const [hasValue, setHasValue] = useState<Boolean>(false);

  // check if input has value to handle label position
  function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
    setHasValue(Boolean(e.target.value));
  }

  return (
    <StyledInput>
      <input
        onChange={handleInputChange}
        name={version}
        id={version}
        type={version === "time" ? "datetime-local" : "number"}
        min={version === "cartValue" ? "0.01" : "1"}
        step={version === "cartValue" ? "0.01" : "1"}
        required
        ref={inputRef}
        data-testid={version}
      />
      <label
        htmlFor={version}
        className={hasValue || version === "time" ? "active" : ""}
      >
        {labelIcon[version].label}
      </label>
      <div>{labelIcon[version].icon}</div>
    </StyledInput>
  );
};

export default CustomInput;
