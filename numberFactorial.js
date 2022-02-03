const numberFactorial = (number) => {
  if (number < 1) {
    return 1;
  }
  return number * numberFactorial(number - 1);
};

console.log(numberFactorial(5));
