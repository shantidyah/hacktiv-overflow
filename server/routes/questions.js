var express = require('express');
var router = express.Router();
const {AddQuest,DeleteQuest,UpdateQuest,ListQuest,DetailQuest} = require('../controller/question.js')

router.get('/',ListQuest)
router.get('/:id',DetailQuest)
router.put('/:id',UpdateQuest)
router.delete('/:id',DeleteQuest)
router.post('/add',AddQuest)

module.exports = router;
