// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  const width = n * 2 - 1;
  const mid = Math.floor(width / 2);

  for (let row = 0; row < n; row++) {
    let stair = "";
    for (let col = 0; col < width; col++) {
      if (mid - row <= col && mid + row >= col) {
        stair += "#";
      } else {
        stair += " ";
      }
    }
    console.log(stair);
  }
}

function pyramid2(n, row = 0, level = "") {
  const width = n * 2 - 1;
  const mid = Math.floor(width / 2);
  const col = level.length;

  if (row >= n) {
    return;
  }

  if (level.length === width) {
    console.log(level);
    return pyramid(n, row + 1, "");
  }

  if (mid - row <= col && mid + row >= col) {
    level += "#";
  } else {
    level += " ";
  }

  pyramid(n, row, level);
}

module.exports = pyramid;
