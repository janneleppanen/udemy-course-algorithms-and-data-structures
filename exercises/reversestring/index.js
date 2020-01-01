// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
  var reversedString = "";

  for (var i = 0; i < str.length; i++) {
    reversedString = str[i] + reversedString;
  }

  return reversedString;
}

function reverse2(str) {
  return str
    .split("")
    .reverse()
    .join("");
}

function reverse3(str) {
  let reversed = "";

  for (character of str) {
    reversed = character + reversed;
  }

  return reversed;
}

function reverse4(str) {
  return str
    .split("")
    .reduce((reversed, character) => character + reversed, "");
}

module.exports = reverse;
