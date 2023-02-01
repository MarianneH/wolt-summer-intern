import styled from "styled-components";

export const StyledButton = styled.button`
  border: none;
  align-items: center;
  justify-content: center;
  text-rendering: optimizelegibility;
  font-size: 1rem;
  text-transform: none;
  font-weight: 700;
  max-width: 100%;
  cursor: "pointer";
  padding: 0px 1rem;
  min-height: 2.875rem;
  border-radius: 0.5rem;
  color: rgb(255, 255, 255);
  background-color: rgb(0, 157, 224);
  &:hover {
    background-color: rgb(45, 192, 255);
  }
`;
