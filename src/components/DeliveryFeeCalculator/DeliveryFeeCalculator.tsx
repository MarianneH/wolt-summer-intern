import React, { useState, useRef } from "react";
import CustomInput from "../CustomInput/CustomInput";
import { Button } from "../Button/Button";
import { StyledDeliveryFee } from "./DeliveryFeeCalculator.styled";
function isFridayBetween3and7pm(date: Date) {
  const d: Date = new Date(date);
  if (d.getUTCDay() !== 5) {
    return false;
  }
  const hours: number = Number(d.getUTCHours());
  return hours >= 15 && hours < 19;
}

function handleCartValueLessThan10(
  cartValue: number,
  surcharge: number
): number {
  if (cartValue < 10) surcharge = +(10 - cartValue).toFixed(2);
  return surcharge;
}

function DeliveryFeeCalculator() {
  const [deliveryFee, setDeliveryFee] = useState<number>(0);

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
      return;
    }

    // if cart value < 10€ round up to 10€
    surcharge = handleCartValueLessThan10(cartValue, surcharge);

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
    // set final Value for deliveryFee not more than 15€
    deliveryFeeTemp > 15 ? setDeliveryFee(15) : setDeliveryFee(deliveryFeeTemp);
  }

  // function to calculate if given datetime is within Fr rush hours

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
        <Button>Calculate Delivery Fee</Button>
      </form>
      <div className="fees">Delivery Fee: {deliveryFee.toFixed(2)} €</div>
    </StyledDeliveryFee>
  );
}

export default DeliveryFeeCalculator;
