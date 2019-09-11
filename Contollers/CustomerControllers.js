const express = require('express');
const router = express.Router();
const Customer = require('../Models/Customer');
const mongoose = require('mongoose');


// Init in-memory
const Customers = [];

// Retrieve all customers from DB
router.get('/', (req,res) => {
    res.send(Customers);
});

// Create a customer
router.post('/Create', async (req,res) => {
    const customer = new Customer({
        Email: req.body.Email,
        Name: req.body.Name,
        Account: req.body.Account
    });
    // save customer to DB
    await Customers.push(customer);

    res.send(Customers);
});

// get Customer by ID
router.get('/:id', async (req,res)=>{
    // res.send(req.params.id);
    // console.log(req.params.id);
    // console.log(Customers);
    const _customer = await Customers.find(function(customer_){
        return customer_._id.toString() === req.params.id;
    });
    // console.log(_customer);
    res.send(_customer);
});

// Add new account to Customer
router.post('/:id', async (req, res) => {
    const _customer = await Customers.find(function(customer_){
        return customer_._id.toString() === req.params.id;
    });
    // get the account array and push new account to the array
    _customer.Account.push(req.body);
    res.send(_customer);
});

module.exports = router;