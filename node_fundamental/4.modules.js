// accessing global variables from 3.modules-setup.js

const { name } = require("./3.local-global.js");
const { sayHi, generateRandomNumber } = require("./5.utils"); //importing from other files
const data = require("./6.alternative-flavour");

sayHi(name);
generateRandomNumber();
console.log(data);
