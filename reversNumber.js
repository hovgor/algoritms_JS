const reversNumber = (number) => {
  let revers = "";
  while (number) {
    revers += number % 10;
    number = parseInt(number / 10);
  }
  return +revers;
};

console.log(reversNumber(0));
