const express = require('express');
const app = express();
const bodyParser = require('body-parser');


app.use(bodyParser.json());

const TransactionRoutes = require('./Contollers/TransactionControllers');

app.use('/transactions', TransactionRoutes);

app.get('/', (req,res) => {
    res.send("Welcome");
});

app.listen(3000, () =>{
    console.log("server started...");
});