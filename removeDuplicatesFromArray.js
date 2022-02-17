const removeDuplicates = (nums) => {
  let arr = [];
  let count = 0;
  for (let i = 0, j = 0; i < nums.length; ++i, ++j) {
    if (nums[i] === nums[i + 1]) {
      arr[j] = "_";
      ++count;
      continue;
    } else {
      arr[j] = nums[i];
    }
  }
  let result = { array_input_length: arr.length - count, array: arr.sort() };

  return result;
};

console.log(removeDuplicates([1, 1, 1, 2, 3, 3, 4, 0, 0, 5, 5, 5, 6, 7, 7, 8]));
