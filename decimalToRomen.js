function decimalToRomen(number) {
  const numbers = [1, 4, 5, 9, 10, 40, 50, 90, 100, 400, 500, 900, 1000];
  const symbols = [
    "I",
    "IV",
    "V",
    "IX",
    "X",
    "XL",
    "L",
    "XC",
    "C",
    "CD",
    "D",
    "CM",
    "M",
  ];
  let i = 12;
  let str = "";
  while (number > 0) {
    let div = parseInt(number / numbers[i]);
    number = number % numbers[i];
    while (div--) {
      str += symbols[i];
    }
    i--;
  }
  return str;
}
console.log(decimalToRomen(1995));
