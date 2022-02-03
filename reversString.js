const reversString = (string) => {
  let revers = "";
  let count = string.length;
  while (count) {
    revers += string[count - 1];
    --count;
  }
  return revers;
};

console.log(reversString("Hovhannisyan"));
