import React from "react";
interface AvgProps {
  no1: number;
  no2: number;
  no3: number;
}

const Average = ({ no1, no2, no3 }: AvgProps) => {
  function getAvg(num1: number, num2: number, num3: number): number {
    const avg = (num1 + num2 + num3) / 3;
    return avg;
  }
  console.log(getAvg(no1,no2,no3))
  return <div>Average: {getAvg(no1,no2,no3)}  </div>;
};

export default Average;
