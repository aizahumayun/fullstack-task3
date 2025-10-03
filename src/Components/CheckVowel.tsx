interface VowelProps {
  char: string;
}

const CheckVowel = ({ char }: VowelProps) => {
  function isVowel(char: string): boolean {
    const lowerChar = char.toLowerCase();
    if (
      lowerChar === "a" ||
      lowerChar === "e" ||
      lowerChar === "i" ||
      lowerChar === "o" ||
      lowerChar === "u"
    ) {
      return true; //its vowel
    } else {
      return false;
    }
  }
  console.log(isVowel(char))
  return <div>{char} {isVowel(char)? "is Vowel": "is not vowel" }</div>;
};

export default CheckVowel;
