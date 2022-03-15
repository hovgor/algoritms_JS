const reverseBits = (bitNumber) => {
  const reversString = (string) => {
    let revers = "";
    let count = string.length;
    while (count) {
      revers += string[count - 1];
      --count;
    }
    return revers;
  };
  const bitToIntager = (bitNumberToIntager) => {
    let intNumber = 0;
    for (let i = bitNumberToIntager.length - 1, j = 0; i >= 0; --i, ++j) {
      intNumber += +bitNumberToIntager[i] * 2 ** j;
    }

    return intNumber;
  };

  const revers = reversString(bitNumber);

  return bitToIntager(revers) + ` (${revers})`;
};

console.log(reverseBits("00000010100101000001111010011100"));
