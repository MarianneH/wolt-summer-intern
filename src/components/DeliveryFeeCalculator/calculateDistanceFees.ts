export function calculateDistanceFees(distance: number): number {
  let distanceSections: number = Math.ceil(distance / 500);
  if (distanceSections > 2) {
    return 2 + (distanceSections - 2);
  } else {
    return 2;
  }
}
