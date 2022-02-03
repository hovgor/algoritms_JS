const FibonacciNumber = (number) => {
  let k = 0;
  let z = 1;
  let result = [];
  for (let i = 0; i < number / 2; ++i) {
    k += z;
    result.push(k);
    z += k;
    result.push(z);
  }
  return result;
};

console.log(FibonacciNumber(7));
