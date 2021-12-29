let fourSum = function (nums, target) {
  let number = 0;
  for (let i = 0; i < nums.length; ++i) {
    number += nums[i];
  }
  if (number === target) {
    return nums;
  }
};

console.log(fourSum([1, 2, 3, 4, 5], 0));
