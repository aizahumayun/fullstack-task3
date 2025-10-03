import React from "react";
interface CheckNegativeProps {
  num: number;
}

const CheckNegative = ({ num }: CheckNegativeProps) => {
  function isNegative(no: number): boolean {
    if (no < 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isNegative(num));
  return <div>{num} {isNegative(num)? "is negative": "is not a negative"}</div>;
};

export default CheckNegative;
