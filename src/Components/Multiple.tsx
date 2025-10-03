interface MultipleProps {
  num: number;
}

const Multiple = ({ num }: MultipleProps) => {
  function isMultipleOf7(num: number): boolean {
    if (num % 7 === 0) {
      return true;
    } else {
      return false;
    }
  }
  console.log(isMultipleOf7(num))
  return <div>{num} {isMultipleOf7(num)? "is a multiple of 7": "is not a multiple of 7"}</div>;
};

export default Multiple;
