const mongoose = require('mongoose');
const Schema = mongoose.Schema
const ObjectId = Schema.ObjectId;

const QuestionSchema = new Schema ({
    question : String,
    vote : {
        type:Number,
        default:0
    },
    user : { type: Schema.Types.ObjectId, ref: 'User' }
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at',
    }
})

const Question = mongoose.model('Question', QuestionSchema);

module.exports = Question