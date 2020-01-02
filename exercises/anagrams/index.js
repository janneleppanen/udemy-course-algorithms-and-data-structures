// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  const sortLetters = str =>
    str
      .replace(/\W/g, "")
      .toLowerCase()
      .split("")
      .sort()
      .join("");

  return sortLetters(stringA) === sortLetters(stringB);
}

function anagrams2(stringA, stringB) {
  function buildCharMap(str) {
    const charMap = {};

    for (let char of str.replace(/\W/g, "").toLowerCase()) {
      charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
  }

  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length)
    return false;

  for (let letter in charMapA) {
    if (charMapA[letter] !== charMapB[letter]) {
      return false;
    }
  }

  return true;
}

module.exports = anagrams;
