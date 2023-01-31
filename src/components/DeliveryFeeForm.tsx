import styled from "styled-components";
import React, { useState, useRef } from "react";
import CustomInput from "./CustomInput";
import { Button } from "./Button";

const StyledDeliveryFee = styled.div`
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

function DeliveryFee() {
  const [disabledButton, setDisabledButton] = useState<boolean>(false);
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

  function isFridayBetween3and7pm(date: Date) {
    const d: Date = new Date(date);
    if (d.getUTCDay() !== 5) {
      return false;
    }
    const hours: number = d.getUTCHours();
    return hours >= 15 && hours < 19;
  }

  const cartValueRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  // handle form submit with all delivery fee calculations
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let cartValue: number = Number(cartValueRef.current!.value);
    let distance: number = Number(distanceRef.current!.value);
    let amount: number = Number(amountRef.current!.value);
    let time: Date = new Date(timeRef.current!.value);
    let surcharge: number = 0;
    let deliveryFeeTemp: number = 0;

    // handle free delivery over 100€
    if (cartValue >= 100) {
      setDeliveryFee(0);
      console.log("no fees");
      return;
    }
    // if cart value < 10€ round up to 10€
    if (cartValue < 10) surcharge = +(10 - cartValue).toFixed(2);
    // handling distance fee calculation
    let tempDist: number = Math.ceil(distance / 500);
    tempDist > 2
      ? (deliveryFeeTemp = 2 + (tempDist - 2))
      : (deliveryFeeTemp = 2);

    // handling amount fee calculation
    if (amount >= 13) {
      deliveryFeeTemp = deliveryFeeTemp + 1.2 + (amount - 4) * 0.5;
    } else if (amount >= 5) {
      deliveryFeeTemp = deliveryFeeTemp + (amount - 4) * 0.5;
    }

    // handle Fr rush hours fee
    if (isFridayBetween3and7pm(time)) {
      deliveryFeeTemp = +((deliveryFeeTemp + surcharge) * 1.2).toFixed(2);
    } else {
      deliveryFeeTemp = deliveryFeeTemp + surcharge;
    }
    // set final Value for deliveryFee
    deliveryFeeTemp > 15 ? setDeliveryFee(15) : setDeliveryFee(deliveryFeeTemp);
  }
  return (
    <StyledDeliveryFee>
      <h1>Delivery Fee Calculator</h1>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div>
          <CustomInput version="cartValue" inputRef={cartValueRef} />
        </div>
        <div>
          <CustomInput version="distance" inputRef={distanceRef} />
        </div>
        <div>
          <CustomInput version="amount" inputRef={amountRef} />
        </div>
        <div>
          <CustomInput version="time" inputRef={timeRef} />
        </div>
        <Button isClickable={disabledButton ? true : false}>
          Calculate Delivery Fee
        </Button>
      </form>
      <div className="fees">
        <span>Delivery Fee:</span> <span>{deliveryFee.toFixed(2)} €</span>
      </div>
    </StyledDeliveryFee>
  );
}

export default DeliveryFee;
