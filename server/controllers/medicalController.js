const mongoose = require('mongoose');
const medicalSchema = require('../models/Medical');
const Medical = mongoose.model('Medical', medicalSchema);
const medicalController = {};

//Load images
const { upload } = require('../handlers/multer');

//Create Medical campaign

medicalController.create = (req, res) => {
    const image = upload.single('medPic');
    image(req, res, function (err) {

        if (err) {

            res.status(500).json({
                msg: err
            });
        } else {
            let imageUrl = null
            if (req.file !== undefined) {
                imageUrl = `uploads/${req.file.filename}`;
            }

            let medicalCampaign = new Medical({
                title: req.body.title,
                description: req.body.description,
                created_at: req.body.created_at,
                campaign_location: req.body.campaign_location,
                country_code: req.body.country_code,
                num_of_volunteers: req.body.num_of_volunteers,
                type_of_volunteers: req.body.type_of_volunteers,
                start_date: req.body.start_date,
                end_date: req.body.end_date,
                image: imageUrl,
                video: req.body.video
            });

            medicalCampaign.save()
                .then(result => {
                    console.log(result);
                    res.status(201).json({
                        message: 'User created'
                    });
                })
                .catch(err => {

                    console.log(err);
                    res.status(500).json({
                        error: err
                    });
                })
        }
    });
};
module.exports = medicalController;

