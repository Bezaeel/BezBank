const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

const TransactionRoutes = require('./Contollers/TransactionControllers');
const CustomerRoutes = require('./Contollers/CustomerControllers');

app.use('/api/transactions', TransactionRoutes);
app.use('/api/customers', CustomerRoutes);

app.get('/', (req,res) => {
    res.send("Welcome");
});

app.listen(3000, () =>{
    console.log("server started...");
});