import React, { useState, useRef } from "react";
import { CustomInput } from "../CustomInput";
import { Button } from "../Button";
import { StyledDeliveryFee } from "./DeliveryFeeCalculator.styled";
import { totalDeliveryFeeCalculation } from "./functions/totalDeliveryFeeCalculation";

export const DeliveryFeeCalculator: React.FC = () => {
  const [deliveryFee, setDeliveryFee] = useState<number | undefined>(undefined);

  const cartValueRef = useRef<HTMLInputElement>(null);
  const distanceRef = useRef<HTMLInputElement>(null);
  const amountRef = useRef<HTMLInputElement>(null);
  const timeRef = useRef<HTMLInputElement>(null);

  let inputSpecs: {
    version: "distance" | "amount" | "time" | "cartValue";
    ref: React.RefObject<HTMLInputElement>;
  }[] = [
    { version: "cartValue", ref: cartValueRef },
    { version: "distance", ref: distanceRef },
    { version: "amount", ref: amountRef },
    { version: "time", ref: timeRef },
  ];

  function handleFormSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    let cartValue: number = Number(cartValueRef.current!.value);
    let distance: number = Number(distanceRef.current!.value);
    let amount: number = Number(amountRef.current!.value);
    let time: Date = new Date(timeRef.current!.value);

    setDeliveryFee(
      totalDeliveryFeeCalculation(cartValue, distance, amount, time)
    );
  }

  return (
    <StyledDeliveryFee>
      <h1>Delivery Fee Calculator</h1>
      <form onSubmit={(e) => handleFormSubmit(e)}>
        {inputSpecs.map((el, index) => {
          return (
            <CustomInput key={index} version={el.version} inputRef={el.ref} />
          );
        })}
        <Button>Calculate Delivery Fee</Button>
      </form>
      {deliveryFee !== undefined && (
        <div className="fees" data-testid="fees">
          Delivery Fee: {deliveryFee?.toFixed(2)} €
        </div>
      )}
    </StyledDeliveryFee>
  );
};

export default DeliveryFeeCalculator;
