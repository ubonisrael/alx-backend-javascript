const Express = require("express");

const app = Express();

app.get("/", (req, res) => {
  res.status(200).end("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const { id } = req.params;
  res.status(200).end(`Payment methods for cart ${id}`);
});

app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
