const singleNumber = (nums) => {
  let arr = [];
  let number = 0;
  let status = false;
  nums.sort();
  let c = 0;
  for (let i = 0, j = 1; i < nums.length; ++i, j = i + 1) {
    for (; j < nums.length; ++j) {
      if (nums[i] !== nums[j]) {
        status = true;
        number = nums[i];
      } else {
        status = false;
        i = j;
        break;
      }
    }
    if (status === true) {
      arr[c++] = number;
    }
  }
  status = "";

  for (let i = 0; i < nums.length - 1; ++i) {
    if (nums[nums.length - 1] !== nums[i]) {
      status = true;
      number = nums[nums.length - 1];
    } else {
      status = false;
      break;
    }
  }

  if (status === true) {
    arr[c] = number;
  }

  console.log(arr);
  return arr;
};

singleNumber([1, 1, 2, 3, 3, 4, 4, 5]);
