// This is your test secret API key.
const stripeKey = process.env.STRIPE_SECRET_KEY;
const stripe = require("stripe")(
  "sk_test_51KonCISB4OuH8RZx4jQmTnE2RIAwElStECzDV2oaWaykf4w0hb1t0eHEzAsDrVxUds5N56VsobHOkyERxYo9fDcn00zulF6YTV"
);

// app.use(express.static("public"));
// app.use(express.json());

const calculateOrderAmount = (items) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return 40000;
};

const payment = async (req, res) => {
  const { items } = req.body;

  // Create a PaymentIntent with the order amount and currency
  const paymentIntent = await stripe.paymentIntents.create({
    amount: calculateOrderAmount(items.price),
    currency: "inr",
    automatic_payment_methods: {
      enabled: true,
    },
  });

  res.send({
    clientSecret: paymentIntent.client_secret,
  });
};

module.exports = payment;
