interface MaxNumProps {
  num1: number;
  num2: number;
  num3: number;
}
const MaxNum = ({ num1, num2, num3 }: MaxNumProps) => {
  function getMaxNUm(num1: number, num2: number, num3: number): number {
    let max;
    if (num1 > num2 && num1 > num3) {
      max = num1;
    } else if (num2 > num1 && num2 > num3) {
      max = num2;
    } else {
      max = num3;
    }
    return max;
  }
  console.log(getMaxNUm(num1,num2,num3))
  return <div>Max number of three is: {getMaxNUm(num1,num2,num3)}</div>;
};

export default MaxNum;
