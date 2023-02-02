import styled from "styled-components";

export const StyledDeliveryFee = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 95vw;
  max-width: 30rem;
  @media (min-width: 768px) {
    width: 60vw;
  }
  margin: 0 auto;
  margin-top: 5vw;
  border: 1px solid rgba(32, 33, 37, 0.12);
  border-radius: 15px;
  padding: 1rem;
  & h1 {
    margin: 2rem auto;
  }
  & form {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
    margin-bottom: 2rem;
  }
  & .fees {
    color: rgb(255, 255, 255);
    font-size: 1.5rem;
    padding: 2rem;
    border-radius: 15px;
    background-color: #001564;
    width: 100%;
    display: flex;
    justify-content: space-around;
  }
`;
