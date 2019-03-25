const express = require('express');
const router = express.Router();
const cors = require('cors');
const educationController = require('../controllers/educationController');
const upload = require('../handler/multer');



//add a new users to DB
router.post('/campaign/education', cors(), educationController.create, upload.single("pictureEdu"));


module.exports = router;