const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    Email:{
        type: String,
        unique: true,
        required: true
    }
    , Name:{
        type: String,
        required: true
    }
    , Account:[{
        AccountNumber:{
            type: String,
            unique: true,
            required: true
        }
        , AccountType:{
            type: String,
            unique: true,
            required: true
        }
        , Balance:{
            type: Number,
            required: true
        }
        , DateCreated:{
            type: Date,
            default: Date.now
        }
        , DateModified:{
            type: Date,
            default: Date.now
        }
    }]
    , DateCreated:{
        type: Date,
        default: Date.now
    }
    , DateModified:{
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Customers', CustomerSchema);