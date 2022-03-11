const countBits = (n) => {
  function dec2bin(dec) {
    return (dec >>> 0).toString(2);
  }

  let arrForN = [];
  let count = n;
  for (let i = 0; i <= n; ++i) {
    arrForN[i] = dec2bin(count--);
  }
  arrForN.reverse();
  let result = 0;
  let array = [];
  for (let i = 0; i < arrForN.length; ++i, result = 0) {
    for (let j = 0; j < arrForN[i].length; ++j) {
      result += parseInt(arrForN[i][j]);
    }
    array.push(result);
  }
  return array;
};

console.log(countBits(5));
