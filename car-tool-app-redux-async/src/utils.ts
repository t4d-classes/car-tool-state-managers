export const nanToBlank = (x: number) => {

  if (isNaN(x)) {
    return '';
  } else {
    return x;
  }

};

export const blankToNaN = (x: string) => {
  if (x.length === 0) {
    return NaN;
  } else {
    return Number(x);
  }
}

export const validCarId: (carId: number | undefined) => boolean = (carId) => {

  if (typeof carId === "undefined") {
    return false;
  }

  if (carId < 1) {
    return false;
  }

  return true;

};