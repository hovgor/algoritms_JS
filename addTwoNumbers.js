let arr1 = [9, 9, 9, 9, 9, 9, 9];

let arr2 = [9, 9, 9, 9];

let addTwoNumbers = function (l1, l2) {
  let len = 0;
  let str = "";
  while (len < l1.length) {
    str = l1[len] + str;
    ++len;
  }
  str = +str;

  let len1 = 0;
  let str1 = "";
  while (len1 < l2.length) {
    str1 = l2[len1] + str1;
    ++len1;
  }
  str1 = +str1;
  let result = str + str1;
  let str3 = "" + result;

  let arr3 = [];
  let z = 0;
  while (result) {
    arr3[z] = result % 10;
    z++;
    result = parseInt(result / 10);
  }

  return arr3;
};

let z = addTwoNumbers(arr1, arr2);
console.log(z);
