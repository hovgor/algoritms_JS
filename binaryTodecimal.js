let number = 5;
let binaryNumbers = ["0", "1"];
let balance = 0;
let str = "";
while (number) {
  balance = number % 2;
  str = binaryNumbers[balance] + str;
  number = parseInt(number / 2);
}

console.log("binary number = " + str);

let str1 = [];
let str2 = "";
for (let i = 0; i < str.length; ++i) {
  str1[i] = str[i];
  if (str1[i] === "1") {
    str1[i] = "0";
  } else {
    str1[i] = "1";
  }
  str2 += str1[i];
}

console.log("conver binary number = " + str2);

let dec = 0;
for (let i = 0; i < str2.length; ++i) {
  dec += str2[i] * 2 ** (str2.length - i);
}
dec /= 2;
console.log("return convert binary number to decimal = " + dec);

