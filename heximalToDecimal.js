function heximalToDecimal(number) {
  const heximalSimbols = [
    "0",
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
  ];
  let balance = 0;
  let str = "";
  while (number) {
    balance = number % 16;
    str = heximalSimbols[balance] + str;
    number = parseInt(number / 16);
  }
  return str;
}

console.log("heximal number: " + heximalToDecimal(1024));
