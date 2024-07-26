const Express = require("express");

const app = Express();

app.use(Express.json())

app.get("/", (req, res) => {
  res.status(200).end("Welcome to the payment system");
});

app.get("/cart/:id(\\d+)", (req, res) => {
  const { id } = req.params;
  res.status(200).end(`Payment methods for cart ${id}`);
});

app.get("/available_payments", (req, res) => {
  res.status(200).end(
    JSON.stringify({
      payment_methods: {
        credit_cards: true,
        paypal: false,
      },
    })
  );
});

app.post("/login", (req, res) => {
  const { userName } = req.body;
  res.status(200).end(`Welcome ${userName}`);
});

app.listen(7865, () => {
  console.log("API available on localhost port 7865");
});
