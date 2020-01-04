// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}

function vowels2(str) {
  let vowelCount = 0;
  const vowelChars = ["a", "e", "i", "o", "u"];

  str
    .toLowerCase()
    .split("")
    .forEach(char => {
      if (vowelChars.indexOf(char) !== -1) {
        vowelCount++;
      }
    });

  return vowelCount;
}

module.exports = vowels;
