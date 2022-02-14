const toLowerCase = (string1) => {
  let str = "";

  for (let i = 0; i < string1.length; ++i) {
    if (string1[i].charCodeAt() >= 65 && string1[i].charCodeAt() <= 90) {
      str += String.fromCodePoint(string1[i].charCodeAt() + 32);
    } else {
      str += string1[i];
    }
  }
  return str;
};

console.log(toLowerCase("Gor.Hovhannisyan@Gmail.Com")); //gor.hovhannisyan@gmail.com
