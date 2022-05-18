const EventEmitter = require("events");

const customEmitter = new EventEmitter();
// so emit is like do something with the specific event for example below you can see that it emit the event that named "response" you can change to whatever you like it's just identifier
// you also can emit the data on the params like below and those data can be used too
// eventEmitter is synchronous

customEmitter.on("response", () => {
  console.log(`data received `);
});

customEmitter.on("response", (name, age) => {
  console.log(`My name is ${name} and i'm ${age} years old`);
});

customEmitter.emit("response", "louis", 22);
