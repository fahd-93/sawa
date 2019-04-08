const express = require('express');
const router = express.Router();
const educationController = require('../controllers/educationController');

//add a new users to DB
router.post('/campaign/education', educationController.create);


module.exports = router;