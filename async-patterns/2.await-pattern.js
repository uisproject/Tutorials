const { readFile } = require("fs");

const getText = (path) => {
  return new Promise((resolve, reject) => {
    readFile(path, "utf-8", (err, res) => {
      if (err) {
        reject(err);
      }

      resolve(res);
    });
  });
};

// first step
// getText("./content/first.txt")
//   .then((result) => console.log(result))
//   .catch((err) => console.log(err));

// another way which is better i think
const start = async () => {
  const first = await getText("./content/first.txt");
  console.log(first);
};

start();
