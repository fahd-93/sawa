const express = require('express');
const router = express.Router();
const constructionController = require('../controllers/constructionController');

//add a new users to DB
router.post('/campaign/construction', constructionController.create);
router.get('/campaign/construction/list', constructionController.list);


module.exports = router;