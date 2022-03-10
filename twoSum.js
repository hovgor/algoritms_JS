const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; ++i) {
    let number = nums[i];
    for (let j = 1; j < nums.length; ++j) {
      if (i === j) {
        continue;
      }
      if (number + nums[j] === target) {
        return [i, j];
      }
    }
  }
};

console.log(twoSum([3, 2, 3], 6));
