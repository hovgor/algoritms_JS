const isPowerOfFour = (n) => {
  if (!n || n < 0) {
    return false;
  }
  while (n > 1) {
    n = n / 4;
    if (Number.isInteger(n)) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isPowerOfFour(16));
