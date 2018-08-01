const Users = require('../models/users.js')
var bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class User{
    static AddUser(req,res){        
        var salt = bcrypt.genSaltSync(5);
        var hash = bcrypt.hashSync(req.body.password, salt);
        Users.create({
            name:req.body.name,
            email:req.body.email,
            password:hash
        })
        .then(user=>{
            res.json(user)
        })
        .catch(err=>{
            res.json(err)
        })
    }
    static Login(req,res){
        Users.findOne({
            email:req.body.email
        })
        .then(user=>{
            if(user==null){
                res.json("email salah");
            }
            else{
                var status = bcrypt.compareSync(req.body.password, user.password);
                if(status){
                    const token = jwt.sign({ id: user._id, name: user.name, email: user.email }, process.env.secret)
                    res.json(token)
                }
                else{
                    res.json("password salah");
                }
            }
        })
    }
}


module.exports = User
