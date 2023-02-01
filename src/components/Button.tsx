import { StyledButton } from "../styles/Button.styled";

interface ButtonProps {
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children }) => {
  return <StyledButton>{children}</StyledButton>;
};
