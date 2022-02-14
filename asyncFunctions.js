var exec = require("child_process").exec;
function shutdown(callback) {
  exec("shutdown now", function (error, stdout, stderr) {
    callback(stdout);
  });
}
const asyncFooPriorety = (number) => {
  const asyncFoo = setInterval(() => {
    if (number !== 0) {
      console.log(number);
      number--;
    } else {
      clearInterval(asyncFoo);
      // Reboot computer
      shutdown(function (output) {
        console.log(output + " Bay-bay) ");
      });
    }
  }, 101);
};

asyncFooPriorety(5);
