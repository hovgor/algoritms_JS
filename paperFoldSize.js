let paperSize = 0.1;
let foldCount = 10;
let foldCountSize = 0;

while (foldCount--) {
  foldCountSize = paperSize * 2;
  paperSize = foldCountSize;
}

console.log(foldCountSize);
