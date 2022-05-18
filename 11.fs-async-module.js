const { readFile, writeFile, read } = require("fs");

readFile("./content/first.txt", "utf-8", (err, result) => {
  if (err) {
    console.log(err);
    return;
  }
  const first = result;
  // so this will read asynchronously and you can check wether it's error or not unlike the synchronous one
  console.log(first);

  writeFile(
    "./content/result-async.txt",
    `here is the result :${first}`,
    { flag: "a" },
    (err, result) => {
      if (err) {
        console.log(err);
        return;
      }

      console.log(result);
    }
  );

  //   it's still the same as usual like the synchronous one just you can added another callback
});

console.log("done with this task");
console.log("Starting with the next one");
