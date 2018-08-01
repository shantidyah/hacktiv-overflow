var express = require('express');
var router = express.Router();
const {ListAns,AddAnswer,AnswerbyQuest,AnswerbyUser,UpdateAns} = require('../controller/answer.js')

router.get('/',ListAns)
router.post('/',AddAnswer)
router.put('/:id',UpdateAns)
router.post('/user',AnswerbyUser)
router.post('/quest',AnswerbyQuest)

module.exports = router;
