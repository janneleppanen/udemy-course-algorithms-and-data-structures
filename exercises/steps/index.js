// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
  for (let i = 0; i < n; i++) {
    let level = "";

    for (let j = 0; j < n; j++) {
      if (j <= i) {
        level += "#";
      } else {
        level += " ";
      }
    }

    console.log(level);
  }
}

function steps2(n, row = 0) {
  if (row >= n) {
    return;
  }

  let level = "";

  for (let i = 0; i < n; i++) {
    if (i <= row) {
      level += "#";
    } else {
      level += " ";
    }
  }

  console.log(level);
  steps(n, row + 1);
}

function steps3(n, row = 0, stair = "") {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  stair += stair.length <= row ? "#" : " ";

  steps(n, row, stair);
}

module.exports = steps;
