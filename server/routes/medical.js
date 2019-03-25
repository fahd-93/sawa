const express = require('express');
const router = express.Router();
const cors = require('cors');
const medController = require('../controllers/medicalController');
const upload = require('../handler/multer');



//add a new users to DB
router.post('/campaign/med', cors(), medController.create, upload.single("pictureMed"));


module.exports = router;