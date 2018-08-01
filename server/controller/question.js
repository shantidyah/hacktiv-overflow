const Questions = require('../models/questions.js')
const jwt = require('jsonwebtoken')


class Question{
    static AddQuest(req,res){        
        // var salt = bcrypt.genSaltSync(5);
        // var hash = bcrypt.hashSync(req.body.password, salt);
        var decoded = jwt.verify(req.headers.token, process.env.secret)
        console.log(decoded.id);
        console.log(req.body.question);
        
        // res.json(decoded.id)
        Questions.create({
            question:req.body.question,
            user:decoded.id
        })
        .then(user=>{
            console.log(user);
            
            res.json(user)
        })
        .catch(err=>{
            console.log(err);
            
            res.json(err)
        })
    }
    static DeleteQuest(req,res){
        Questions.findByIdAndDelete(req.params.id)
        .then(quest=>{
            console.log(quest);
            
            res.json(quest)
        })
        .catch(err=>{
            console.log(err);
            
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
        .populate('user')
        .exec(function(err,quest){
            if(err){
                res.json(err)
            }
            else{
                res.json(quest)
            }
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
