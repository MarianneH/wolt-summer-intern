import {
  distanceFee,
  minDistance,
  minDistanceFee,
} from "./_deliveryFeeVariables";

export function distanceFeeCalculation(distance: number): number {
  let distanceSections: number = Math.ceil(distance / 500);
  let amountMinDistance = minDistance / 500;
  if (distanceSections > amountMinDistance) {
    return (
      minDistanceFee + (distanceSections - amountMinDistance) * distanceFee
    );
  } else {
    return minDistanceFee;
  }
}
