const isValid = (x) => {
  let a = 0;
  let b = 0;
  let c = 0;

  for (let i = 0; i < x.length; ++i) {
    if (x[i] == "{" || x[i] == "}") {
      if (x[i] === "{") {
        ++a;
      } else if (x[i] === "}" && a >= 1) {
        --a;
      } else {
        return false;
      }
    }

    if (x[i] == "[" || x[i] == "]") {
      if (x[i] === "[") {
        ++b;
      } else if (x[i] === "]" && b >= 1) {
        --b;
      } else {
        return false;
      }
    }
    if (x[i] == "(" || x[i] == ")") {
      if (x[i] === "(") {
        ++c;
      } else if (x[i] === ")" && c >= 1) {
        --c;
      } else {
        return false;
      }
    }
  }
  if (a == 0 && b == 0 && c == 0) {
    return true;
  } else {
    return false;
  }
};

let xx = "{()[]}";

console.log(isValid(xx));
