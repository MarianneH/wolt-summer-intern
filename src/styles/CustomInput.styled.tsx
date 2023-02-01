import styled from "styled-components";

export const StyledInput = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;
  width: 100%;
  font-size: 1rem;
  & input {
    width: 100%;
    box-sizing: border-box;
    background: rgb(255, 255, 255);
    color: rgb(32, 33, 37);
    padding: 0.75rem 0.875rem;
    padding-top: 1.25rem;
    border: 2px solid rgba(32, 33, 37, 0.12);
    border-radius: 0.5rem;
    padding-inline-start: 3.125rem;
    line-height: 1.4;
    font-size: 1rem;
    transition: border 0.2s linear 0s;
    &:focus {
      + label {
        transform: translateY(-0.6875rem) scale(0.75);
      }
    }
    &:hover {
      border-color: rgb(0, 157, 224);
      box-shadow: rgb(0, 157, 224) 0px 0px 0px 0.0625rem;
      transition: border 0.2s linear 0s;
    }
  }
  & input[type="datetime-local"]::-webkit-calendar-picker-indicator {
    background: transparent;
    bottom: 0;
    color: transparent;
    cursor: pointer;
    height: auto;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    width: auto;
  }
  & label {
    line-height: 1.5rem;
    color: rgba(32, 33, 37, 0.64);
    transform-origin: left center;
    position: absolute;
    left: 3.25rem;
    transition: transform 0.15s ease-in-out 0s;
    pointer-events: none;
    &.active {
      transform: translateY(-0.6875rem) scale(0.75);
    }
  }
  & div {
    pointer-events: none;
    cursor: text;
    width: 1.5rem;
    height: 1.5rem;
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    left: 1rem;
    right: auto;
    color: rgba(32, 33, 37, 0.64);
    & svg {
      width: 2rem;
      height: 2rem;
    }
  }
`;
