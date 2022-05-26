const http = require("http");
const { readFileSync } = require("fs");

const homepageHTML = readFileSync("./navbar-app/index.html");
const homepageStyles = readFileSync("./navbar-app/styles.css");
const homepageImage = readFileSync("./navbar-app/logo.svg");
const homepageLogic = readFileSync("./navbar-app/browser-app.js");

const server = http.createServer((req, res) => {
  console.log("user hit the server");

  const url = req.url;
  console.log(url);
  // this is home page
  if (url === "/") {
    //   defining header
    res.writeHead(200, {
      "content-type": "text/html", // so i just knew about how important this is, the content-type is deciding what kind of content you are trying you are rendering for example if you say type/html any body will be rendered in html so if you put tag like <h1>something</h1> it will be rendered like the usual html, while if you make it 'text/plain' so the element tag of the html won't be parsed so you will see the element tag, and so on
    });

    res.write(homepageHTML);
    res.end();
  } else if (url === "/styles.css") {
    //   defining header
    res.writeHead(200, {
      "content-type": "text/css",
    });

    res.write(homepageStyles);
    res.end();
  } else if (url === "/browser-app.js") {
    //   defining header
    res.writeHead(200, {
      "content-type": "text/javascript",
    });

    res.write(homepageLogic);
    res.end();
  } else if (url === "/logo.svg") {
    //   defining header
    res.writeHead(200, {
      "content-type": "image/svg+xml",
    });

    res.write(homepageImage);
    res.end();
  }
  //   this is about page
  else if (url === "/about") {
    res.writeHead(200, {
      "content-type": "text/html",
    });

    res.write("<h1>About Page</h1>");
    res.end();
  }
  //   error page
  else {
    res.writeHead(404, {
      "content-type": "text/html",
    });

    res.write("<h1>Page not found</h1>");
    res.end();
  }
});

server.listen(5000, () => {
  console.log("is listening to port 5000");
});
