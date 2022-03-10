const isSameTree = (p, q) => {
  for (let i = 0; i < q.length + p.length; ++i) {
    if (p[i] === q[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(isSameTree([1, 2], [1, null, 2]));
