const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

let products = [
  { id: 1, name: "pen", price: 10, stock: 100 },
  { id: 2, name: "book", price: 20, stock: 50 },
  { id: 3, name: "bag", price: 300, stock: 15 },
];

app.get('/products',(req,res)=>{
    res.send(products)
})

app.put('/products/:id', (req, res) => {
  const productId = parseInt(req.params.id);

  const product = products.find(p => p.id === productId);

  if (!product) {
    return res.status(404).send( `Product with id ${productId} does not exist.` );
  }

  const { name, price, stock } = req.body;
9
  if (name !== undefined) product.name = name;
  if (price !== undefined) product.price = price;
  if (stock !== undefined) product.stock = stock;

  res.send(
     `Product with id ${productId} updated successfully.`
  );
});

app.listen(port, () => {
  console.log(`Product catalog app listening at http://localhost:${port}`);
});
