const isToeplitzMatrix = (matrix) => {
  for (let i = 0; i < matrix.length - 1; i++) {
    for (let j = 0; j < matrix[i].length - 1; j++) {
      if (matrix[i][j] != matrix[i + 1][j + 1]) {
        return false;
      }
    }
  }
  return true;
};

console.log(
  isToeplitzMatrix([
    [38, 86, 7, 94, 71, 59, 10],
    [19, 0, 86, 7, 94, 71, 59],
  ])
);
