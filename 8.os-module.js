// os module

const { userInfo, uptime, type, release, totalmem, freemem } = require("os");

// info about current user
const user = userInfo();
// console.log(user);

// method returns the system uptime in seconds
console.log(`The System Uptime is ${uptime()} seconds`);

const currentOS = {
  name: type(),
  release: release(),
  totalMem: totalmem(),
  freeMem: freemem(),
};

console.log(currentOS);
