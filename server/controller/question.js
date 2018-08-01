const Questions = require('../models/questions.js')

class Question{
    static AddQuest(req,res){        
        // var salt = bcrypt.genSaltSync(5);
        // var hash = bcrypt.hashSync(req.body.password, salt);
        Questions.create({
            question:req.body.question,
            user:req.body.user
        })
        .then(user=>{
            res.json(user)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static DeleteQuest(req,res){
        Questions.findByIdAndDelete(req.params.id)
        .then(quest=>{
            res.json(quest)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static UpdateQuest(req,res){
        Questions.findByIdAndUpdate(req.params.id,{
            question:req.body.question
        })
        .then(quest=>{
            res.json(quest)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static ListQuest(req,res){
        Questions.find({})
        .then(quest=>{
            res.json(quest)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static DetailQuest(req,res){
        Questions.findOne({
            _id:req.params.id
        })
        .then(quest=>{
            res.json(quest)
        })
        .catch(err=>{
            res.json(err)
        })
    }
}


module.exports = Question
