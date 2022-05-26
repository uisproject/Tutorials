const express = require("express");
const { products } = require("../data");
const app = express();
// query string & param
app.get("/", (req, res) => {
  res.send("<h1>Home page</h1><a href='/api/products'>products</a>");
});

app.get("/api/products", (req, res) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  });

  res.json(newProducts);
});

app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;
  let sortedProducts = [...products];

  if (search) {
    sortedProducts = sortedProducts.filter((product) => {
      return product.name.startsWith(search);
    });
  }

  if (limit) {
    sortedProducts = sortedProducts.slice(0, Number(limit));
  }

  if (sortedProducts.length < 1) {
    return res.status(200).json({ status: "success", data: [] }); // you only can send 1 request so one of them must send return to stop read the below lines
  }

  res.status(200).json(sortedProducts);
});

app.get("/api/products/:productId", (req, res) => {
  const { productId } = req.params;
  const singleProduct = products.find(
    (products) => products.id === Number(productId)
  );

  if (!singleProduct) {
    return res.status(404).send("Product Does Not Exist");
  }
  res.json(singleProduct);
});

app.listen(5000, () => {
  console.log("listening to 5000");
});
