const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const AnswerSchema = new Schema ({
    answer : String,
    vote : {
        type:Number,
        default:0
    },
    user : { type: Schema.Types.ObjectId, ref: 'User' },
    question : { type: Schema.Types.ObjectId, ref: 'Question' }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const Answer = mongoose.model('Answer', AnswerSchema);

module.exports = Answer