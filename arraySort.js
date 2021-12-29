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

let array = [3, 4, 2, 1, 8, 5, 9, -2];
console.log(sortArray(array));
