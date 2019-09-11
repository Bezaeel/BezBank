const mongoose = require('mongoose');

const CustomerSchema = mongoose.Schema({
    CustomerID:{
        type: Schema.Types.ObjectId,
        unique: true,
        required: true
    }
    , Email:{
        type: String,
        unique: true,
        required: true
    }
    , Name:{
        type: String,
        required: true
    }
    , Account:[{
        ID:{
            type: Schema.Types.ObjectId,
            unique: true,
            required: true
        }
        , AccountNumber:{
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