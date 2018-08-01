var express = require('express');
var router = express.Router();
const {AddUser,Login} = require('../controller/user.js')



router.get('/',function(req,res){
  res.json("masuk server")
})

router.post('/login',Login)

router.post('/register',AddUser)

module.exports = router;
