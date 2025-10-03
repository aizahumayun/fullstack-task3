import React from "react";
interface CheckAlphabetProps {
  char: string;
}

const CheckAlphabet = ({ char }: CheckAlphabetProps) => {
  function isAlphabet(ch: string): boolean {
    if ((ch >= "A" && ch <= "Z") || (ch >= "a" && ch <= "z")) {
      return true; //its  alphabet
    } else {
      return false; // its not alphabet
    }
  }
  console.log(isAlphabet(char));
  return <div>{char} {isAlphabet(char)? "is Alphabet": "is not Alphabet"}</div>;
};

export default CheckAlphabet;
