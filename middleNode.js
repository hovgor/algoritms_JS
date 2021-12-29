let middleNode = function (head) {
  let arrLen = head.length - 1;
  let tmp = [];
  for (let i = 2, j = 0; i >= 0; --i, ++j) {
    tmp[i] = head[arrLen - j];
  }

  return tmp;
};

let array1 = middleNode([1, 2, 3, 4, 5, 6]);
let array2 = middleNode([1, 2, 3, 4, 5]);

console.log(array1);
console.log(array2);

let a = "41";

let b = a - 0;
console.log(b);
