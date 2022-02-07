let isMatch = (s, p) => {
  let count = 0;
  for (let i = 0; i < s.length; ++i) {
    if (s[i] === p[i]) {
      count++;
    } else if (s[i] === "?" || p[i] === "?") {
      count++;
    } else if (s[i] === "*" || p[i] === "*") {
      if (s.length === 1 || p.length === 1) {
        return true;
      }
      return false;
    } else if (s[i] !== p[i]) {
      count--;
    }
  }
  if (count === s.length && count === p.length) {
    return true;
  } else {
    return false;
  }
};

console.log(isMatch("asd", "awq"));
