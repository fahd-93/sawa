const express = require('express');
const router = express.Router();
const constructionController = require('../controllers/constructionController');

router.post('/campaign/construction', constructionController.create);

router.get(`/campaign/construction/:id`, constructionController.show);



module.exports = router;