const sortByBits = (nums) => {
  const toBinary = (number) => {
    let binaryNumbers = ["0", "1"];
    let balance = 0;
    let str = "";
    let arr = [];
    arr[0] = number;
    while (number) {
      balance = number % 2;
      str = binaryNumbers[balance] + str;
      number = parseInt(number / 2);
    }
    arr[1] = str;
    const binaryNumbersAdd = (string) => {
      let resultNumber = 0;
      for (let i = 0; i < string.length; ++i) {
        resultNumber += +string[i];
      }
      console.log(resultNumber);
      return resultNumber;
    };
    arr[2] = binaryNumbersAdd(str);
    console.log(arr);
    return arr;
  };

  let sortingArr = [];
  for (let i = 0; i < nums.length; ++i) {
    sortingArr.push(toBinary(nums[i]));
  }
  function sortArray(array) {
    for (let i = 0, j = 1; i < array.length - 1; ++i, j = i + 1) {
      for (let k = i; k < array.length - 1; ++k, ++j) {
        if (array[i][2] > array[j][2]) {
          let tmp = array[i];
          array[i] = array[j];
          array[j] = tmp;
        }
      }
    }
    console.log(array);
    return array;
  }

  let newSortArr = sortArray(sortingArr);
  let result = [];

  for (let i = 0; i < newSortArr.length; ++i) {
    result.push(newSortArr[i][0]);
  }
  return result;
};

console.log(sortByBits([0, 1, 2, 3, 4, 5, 6, 7, 8]));
