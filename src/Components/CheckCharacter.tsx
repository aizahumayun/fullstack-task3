import React from "react";
interface CheckCharacterProps {
  str: string;
}

const CheckCharacter = ({str}:CheckCharacterProps) => {
    function isCharacter(char: string): boolean{
        if(char.length === 1){
            return true //its a character
        }
        else {
            return false //its not a character
        }
    }
    console.log(isCharacter(str))
  return <div>{str} {isCharacter(str)? "is a character": "is not a character"}</div>;
};

export default CheckCharacter;
