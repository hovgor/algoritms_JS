let paperSize = 1;
let foldCount = 4;
let foldCountSize = 0;

while (foldCount--) {
  foldCountSize = paperSize * 2;
  paperSize = foldCountSize;
}

console.log(foldCountSize);
