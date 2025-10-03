import "./App.css";
import CheckCharacter from "./Components/CheckCharacter";
import CheckNegative from "./Components/CheckNegative";
import Average from "./Components/Average";
import CheckUpperCase from "./Components/CheckUpperCase";
import MaxNum from "./Components/MaxNum";
import Multiple from "./Components/Multiple";
import Grade from "./Components/Grade";
import CheckVowel from "./Components/CheckVowel";
import CheckAlphabet from "./CheckAlphabet";
import SumOfNatNo from "./SumOfNatNo";

function App() {
  return (
    <>
      <div className="flex flex-wrap gap-7">
        <MaxNum num1={25} num2={49} num3={15} />
        <Multiple num={8} />
        <Multiple num={49} />
        <Grade marks={80} />
        <Grade marks={45} />
        <CheckUpperCase char="f" />
        <CheckUpperCase char="D" />
        <Average no1={4} no2={6} no3={8} />
        <CheckNegative num={7} />
        <CheckNegative num={-3} />
        <CheckCharacter str="Abcd" />
        <CheckCharacter str="A" />
        <CheckVowel char="A" />
        <CheckVowel char="e" />
        <CheckVowel char="w" />
        <CheckAlphabet char="K" />
        <CheckAlphabet char="s" />
        <CheckAlphabet char="5" />
        <SumOfNatNo num={6}/>
      </div>
    </>
  );
}

export default App;
