// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  const charMap = {};
  var mostUsedChar = "";
  var usedTimes = 0;

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > usedTimes) {
      usedTimes = charMap[char];
      mostUsedChar = char;
    }
  }

  return mostUsedChar;
}

module.exports = maxChar;
