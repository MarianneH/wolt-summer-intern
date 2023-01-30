import styled from "styled-components";

interface ButtonProps {
  isClickable: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  border: none;
  align-items: center;
  justify-content: center;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  text-transform: none;
  font-weight: 700;
  max-width: 100%;
  cursor: ${({ isClickable }) => (isClickable ? "not-allowed" : "pointer")};
  padding: 0px 1rem;
  min-height: 2.875rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  background-color: ${({ isClickable }) =>
    isClickable ? "#8ca3b0" : "rgb(0, 157, 224)"};
  &:hover {
    background-color: ${({ isClickable }) =>
      isClickable ? "#8ca3b0" : "rgb(45, 192, 255)"};
  }
`;

export const Button = ({
  children,
  isClickable,
}: {
  children: string;
  isClickable: boolean;
}) => {
  return <StyledButton isClickable={isClickable}>{children}</StyledButton>;
};
