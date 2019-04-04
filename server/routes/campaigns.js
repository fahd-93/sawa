const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
const Campaigns = require('../controllers/constructionController');

const boo = Campaigns.collection

console.log(boo);



router.get('/campaign', (req, res) => {
    // boo.find({}).exec((err, camp) => {
    res.send("{ camp }")

    // })
})

module.exports = router