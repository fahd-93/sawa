const express = require('express');
const router = express.Router();
const cors = require('cors');
const constructionController = require('../controllers/constructionController');



//add a new users to DB
router.post('/campaign/construction', cors(), constructionController.create);


module.exports = router;