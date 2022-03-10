const mergeTwoLists = (nums1, nums2) => {
  let array = nums1;
  for (let j = 0; j < nums2.length; ) {
    array.push(nums2[j++]);
  }
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
};

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
