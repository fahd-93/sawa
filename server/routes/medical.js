const express = require('express');
const router = express.Router();
const cors = require('cors');
const medController = require('../controllers/medicalController');



//add a new users to DB
router.post('/campaign/med', cors(), medController.create);


module.exports = router;