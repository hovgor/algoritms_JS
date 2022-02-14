const numberToWord = (number) => {
  if (number === 0) {
    return "Zero";
  }
  const belowTen = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
  ];
  const belowTwenty = [
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const belowHundred = [
    "",
    "Ten",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];
  function foo(number) {
    let result = "";
    if (number % 1000 === 0) {
      result = foo(number % 100);
    }
    if (number < 10) {
      result = belowTen[number];
    } else if (number < 20) {
      result = belowTwenty[number - 10];
    } else if (number < 100) {
      result = belowHundred[parseInt(number / 10)] + " " + foo(number % 10);
    } else if (number < 1000) {
      result = foo(parseInt(number / 100)) + " Hundred " + foo(number % 100);
    } else if (number < 1000000) {
      result = foo(parseInt(number / 1000)) + " Thousand " + foo(number % 1000);
    } else if (number < 1000000000) {
      result =
        foo(parseInt(number / 1000000)) + " Million " + foo(number % 1000000);
    } else {
      result =
        foo(parseInt(number / 1000000000)) +
        " Billion " +
        foo(number % 1000000000);
    }
    return result;
  }
  let str = foo(number);
  let resultate = "";
  for (let i = 0; i < str.length; ++i) {
    if (str[i - 1] === " " && str[i] === " ") {
      resultate = str.slice(0, str[i - 1]);
      continue;
    }
    resultate += str[i];
  }
  return resultate;
};
console.log("'" + numberToWord(52781) + "'");
