// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  const results = [];
  let startRow = 0;
  let startCol = 0;
  let endRow = n - 1;
  let endCol = n - 1;
  let x = 0;
  let y = 0;
  let xDir = 1;
  let yDir = 0;
  let nextNum = 1;

  for (let i = 0; i < n; i++) {
    const row = [];
    for (let i = 0; i < n; i++) {
      row.push(0);
    }
    results.push(row);
  }

  while (nextNum <= n * n) {
    results[y][x] = nextNum;

    if (x === endCol && y === startRow && yDir !== 1) {
      xDir = 0;
      yDir = 1;
      startRow++;
    }

    if (y === endRow && x === endCol && xDir !== -1) {
      xDir = -1;
      yDir = 0;
      endCol--;
    }

    if (x === startCol && y === endRow && yDir != -1) {
      xDir = 0;
      yDir = -1;
      endRow--;
    }

    if (y === startRow && x === startCol && xDir !== 1 && nextNum > 1) {
      xDir = 1;
      yDir = 0;
      startCol++;
    }

    x += xDir;
    y += yDir;
    nextNum++;
  }

  return results;
}

function matrix2(n) {
  const results = [];

  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // top
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right
    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // bottom
    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left
    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return results;
}

module.exports = matrix;
