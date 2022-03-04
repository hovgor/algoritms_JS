const oneLoopSorte = (array) => {
  let tmpArray = [];
  for (let i = 0; i < array.length; ++i) {
    tmpArray[array[i] - 1] = array[i];
  }
  return tmpArray;
};

console.log(
  oneLoopSorte([2, 3, 4, 1, 8, 5, 6, 7, 10, 9, 11, 13, 12, 18, 15, 17, 14, 16])
);
