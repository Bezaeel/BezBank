const mongoose = require('mongoose');

const AccountSchema = mongoose.Schema({
    ID:{
        type: Schema.Types.ObjectId,
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
});

module.exports = mongoose.model('Accounts', AccountSchema);