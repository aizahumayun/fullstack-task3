import React from "react";
interface CharProps {
  char: string;
}

const CheckUpperCase = ({ char }: CharProps) => {
  function isUpperCase(char: string): boolean {
    if (char === char.toUpperCase()) {
      return true; //its uppercase
    } else {
      return false; //its not an uppercase
    }
  }
  console.log(isUpperCase(char));
  return <div>Character {char} {isUpperCase(char) ? "is an uppercase" : "is not an uppercase"}</div>;
};

export default CheckUpperCase;
