const express = require('express');
const router = express.Router();
const cors = require('cors');
const constructionController = require('../controllers/constructionController');
const upload = require('../handler/multer');



//add a new users to DB
router.post('/campaign/construction', cors(), constructionController.create, upload.single("pictureConstruction"));


module.exports = router;