// Enter the hour and minute on the console and
// get the degree of angle.

function clockDeg(hour, minute) {
  let clockMinute = minute * 6;
  let clockHour = hour * 30 + minute * 0.5;
  let degree = clockHour - clockMinute;
  if (degree < 0) {
    degree * -1;
  }
  return degree;
}

console.log(clockDeg(3, 15));
