const isPowerOfThree = (n) => {
  if (!n || n < 0) {
    return false;
  }
  while (n > 1) {
    n = n / 3;
    if (Number.isInteger(n)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPowerOfThree(-3));
