const Answers = require('../models/answers.js')
// var bcrypt = require('bcryptjs')

class Answer{
    static AddAnswer(req,res){        
        // var salt = bcrypt.genSaltSync(5);
        // var hash = bcrypt.hashSync(req.body.password, salt);
        Answers.create({
            answer:req.body.answer,
            user:req.body.user,
            question:req.body.question
        })
        .then(ans=>{
            res.json(ans)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static AnswerbyQuest(req,res){
        Answers.findOne({
            question:req.body.question
        })
        .then(ans=>{
            res.json(ans)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static AnswerbyUser(req,res){
        Answers.findOne({
            user:req.body.user
        })
        .then(ans=>{
            res.json(ans)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static UpdateAns(req,res){
        Answers.findByIdAndUpdate(req.params.id,{
            answer:req.body.answer
        })
        .then(ans=>{
            res.json(ans)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static ListAns(req,res){
        Answers.find({})
        .then(ans=>{
            res.json(ans)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}


module.exports = Answer
