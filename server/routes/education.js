const express = require('express');
const router = express.Router();
const cors = require('cors');
const educationController = require('../controllers/educationController');



//add a new users to DB
router.post('/campaign/education', cors(), educationController.create);


module.exports = router;