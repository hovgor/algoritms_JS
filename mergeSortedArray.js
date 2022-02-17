const merge = (nums1, m, nums2, n) => {
  let arr = [];
  nums1.length = m;
  nums2.length = n;
  arr.length = m + n;

  for (let i = 0, j = 0; i < arr.length; ++i) {
    if (i < m) {
      arr[i] = nums1[i];
    } else {
      arr[i] = nums2[j];

      ++j;
    }
  }

  arr.sort();
  console.log(arr);
  return arr;
};

merge([], 0, [0], 1);
