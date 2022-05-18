const sayHi = (name) => console.log(`Hello there ${name}`);
const generateRandomNumber = () => console.log(Math.floor(Math.random() * 10));

module.exports = {
  sayHi,
  generateRandomNumber,
};
