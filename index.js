const express = require("express");
const app = express();
var cors = require('cors')
app.use(cors())
const port = 4000;
app.use(express.json());

//data
const products = [
  {
    _id: "p1001",
    name: "Product 1",
    price: 100,
    ratings: 4.5,
    description: "Description of Product 1",
  },
  {
    _id: "p22",
    name: "Product 2",
    price: 200,
    ratings: 4.0,
    description: "Description of Product 2",
  },
];

app.get("/api/products/compare", async (req, res) => {
  try {
    const productIds = req.query.ids;
    const product = products.filter((product) =>
      productIds.includes(product._id)
    );

    res.status(200).json(product);
  } catch (error) {
    console.log({ msg: error });
  }
});

app.listen(port, () => {
  console.log(`server is running at the port ${port}`);
});
