const UserProfile = require('../models/Users');
const mongoose = require('mongoose');

const userProfileController = {};
//Load images
const { upload } = require('../handlers/multer');

userProfileController.list = (req, res) => {
	UserProfile.find({}).exec((error, users) => {
		if (error) {
			console.log('Error:', error);
		} else {
			res.send(users);
		}
	});
};

userProfileController.creat = (req, res) => {
	//check if user is registered
	UserProfile.find({ email })
		.exec()
		.then((user) => {
			if (!user.length >= 1) {
				return res.status(409).json({
					message: 'Mail does not exist please sign up'
				});
			} else {
				userProfile = new UserProfile({
					method: 'local',
					name: req.body.name,
					last_name: req.body.last_name,
					date_of_birth: req.body.date_of_birth,
					gender: req.body.gender,
					created_at: req.body.created_at,
					user_location: req.body.user_location,
					role: req.body.role,
					profession_id: req.body.profession_id,
					activity_id: req.body.activity_id,
					rating: req.body.rating,
					avatar: imageUrl
				});
				userProfile.save().then((result) => {
					console.log(result);

					res.status(201).json({
						message: 'Profile created'
					});
				});
			}
		})
		.catch((err) => {
			console.log(err);
			res.status(500).json({
				error: err
			});
		});
};

module.exports = userProfileController;
