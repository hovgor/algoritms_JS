const mergeKLists = (lists) => {
  function sortArray(array) {
    for (let i = 0, j = 0; i < array.length - 1; ++i, j = i + 1) {
      for (let k = i; k < array.length; ++k, ++j) {
        if (array[i] > array[j]) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
    return array;
  }

  let tempArr = [];
  for (let i = 0; i < lists.length; ++i) {
    for (let j = 0; j < lists[i].length; ++j) {
      tempArr.push(lists[i][j]);
    }
  }
  return sortArray(tempArr);
};

console.log(
  mergeKLists([
    [1, 4, 5],
    [1, 3, 4],
    [2, 6],
  ])
);
