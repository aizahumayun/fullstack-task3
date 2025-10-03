interface SumOfNatNoProps {
  num: number;
}

const SumOfNatNo = ({ num }: SumOfNatNoProps) => {
  function getSumOfNatNum(no: number): number {
    return (no * (no + 1)) / 2;
  }
  console.log(getSumOfNatNum(num));
  return (
    <div>
      Sum of First {num} natural numbers = {getSumOfNatNum(num)} 
    </div>
  );
};

export default SumOfNatNo;
