const atmScheme = (money) => {
  const moneyType = [1, 2, 5, 10, 20, 50, 100, 500];

  let obj = {};
  let arr1 = [];
  let count = 0;
  let moneyName = [
    "five_hundred",
    "one_hundred",
    "fifty",
    "twenty",
    "ten",
    "five",
    "two",
    "one",
  ];

  for (let i = moneyType.length - 1; i >= 0; --i) {
    let temp = parseInt(money / moneyType[i]);
    if (temp !== 0) {
      obj[moneyName[count]] = temp;
    }
    arr1[count] = parseInt(money / moneyType[i]);
    money -= arr1[count++] * moneyType[i];
  }
  return obj;
};

console.log(atmScheme(1478));
