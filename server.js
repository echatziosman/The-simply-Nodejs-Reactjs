const express = require('express');
const cors = require('cors');
const app = express();
const customers = require('./employee.json');

app.use(cors());
app.use(express.json());

app.get('/api/customers', (req, res) => {
  res.json(customers);
});

app.post('/api/save', (req, res) => {
  let customer = {
    id: req.body.id,
    name: req.body.name,
    surname: req.body.surname,
  };
  customers.push(customer);
  console.log(customer);
});

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server started on Port: ${PORT}`);
});
