const express = require('express');
const router = express.Router();
const constructionController = require('../controllers/constructionController');

//add a new users to DB
router.post('/campaign/construction', constructionController.create);


module.exports = router;