const express = require('express');
const router = express.Router();

// Get all Transactions in the system
router.get('/', (req,res) => {
    res.send("Transaction Index");
});

// Get Transaction by account Number
// Make a Transaction
// router.post("/deposit")
// Revers a Transaction

module.exports = router;