const sortArrayByParity = (array) => {
  let evenIntegers = [];
  let oddIntagers = [];
  for (let i = 0, j = array.length - 1; i < array.length; ++i) {
    if (array[i] % 2 === 0) {
      evenIntegers.push(array[i]);
    } else {
      oddIntagers.push(array[i]);
    }
  }
  let result = [];
  for (let i = 0, j = 0; i < array.length; ++i) {
    if (evenIntegers[i] !== undefined) {
      result.push(evenIntegers[i]);
    } else {
      result.push(oddIntagers[j++]);
    }
  }

  return result;
};

console.log(sortArrayByParity([1, 2, 3, 4]));
