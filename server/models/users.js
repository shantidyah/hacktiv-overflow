const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const UserSchema = new Schema ({
    name : String,
    email : String,
    password : String
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const User = mongoose.model('User', UserSchema);

module.exports = User