let TheArithmeticAverage = function (nums1, nums2) {
  let nums3 = [];
  let lengthNums3 = nums1.length + nums2.length;
  let result = 0;
  for (let i = 0, j = 0; i < lengthNums3; ++i) {
    if (nums1[i] !== undefined) {
      nums3[i] = nums1[i];
    } else {
      nums3[i] = nums2[j];
      ++j;
    }
    result += nums3[i];
  }

  return result / lengthNums3;
};

let z = TheArithmeticAverage([1, 3], [2]);
console.log(z);
