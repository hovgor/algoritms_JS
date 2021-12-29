let findMedianSortedArrays = function (nums1, nums2) {
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

  let nums3 = [];
  let lengthNums3 = nums1.length + nums2.length - 1;

  for (let i = 0, j = 0; i <= lengthNums3; ++i) {
    if (nums1[i] !== undefined) {
      nums3[i] = nums1[i];
    } else {
      nums3[i] = nums2[j];
      ++j;
    }
  }

  nums3 = sortArray(nums3);
  if (lengthNums3 % 2 === 0) {
    let result = lengthNums3 / 2;
    return nums3[result];
  } else if (lengthNums3 % 2 === 1) {
    let a = lengthNums3 / 2 - 0.5;
    let b = a + 1;

    let result = (nums3[a] + nums3[b]) / 2;
    return result;
  }
};

let z = findMedianSortedArrays([1, 3], [2]);
console.log(z);
