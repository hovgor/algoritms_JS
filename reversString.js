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

const reversArrayString = (string) => {
  let revers = [];
  let count = string.length;
  let i = 0;
  while (count) {
    revers[i] = string[count - 1];
    count--;
    i++;
  }

  return revers;
};

console.log(reversArrayString(["h", "e", "l", "l", "o"]));
