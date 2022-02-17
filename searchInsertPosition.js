const searchInsert = (nums, target) => {
  let count = 0;
  nums.sort();
  for (let i = 0; i < nums.length; ++i) {
    if (target > nums[i]) {
      count++;
    }
  }

  return count;
};

console.log(searchInsert([1, 2, 4, 6, 7, 10], 5));
