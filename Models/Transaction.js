const mongoose = require('mongoose');

const TransactionSchema = mongoose.Schema({
   CustomerID:{
        type: String,
        required: true
    }
    , AccountNumber: {
        type: String,
        required: true
    }
    , Narration:{
        type: String,
        required: true
    }
    , TransactionType:{
        type: String,
        required: true
    }
    , Amount:{
        type: Number,
        required: true
    }
    , TxnDate:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Transactions', TransactionSchema);