const mongoose = require('mongoose');
const User = require('../models/Users');
const Campaign = require('../models/Campaign');
const typesSchema = require('../models/Types');
const Types = mongoose.model('Types', typesSchema);
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config/jwt-config');
// const { upload } = require('../handlers/multer');
//const image = upload.single('image');

const userController = {};

userController.typeList = (req, res) => {
	Types.find({}).exec((error, types) => {
		if (error) {
			console.log(`Error: ${error}`);
		} else {
			res.send(types);
		}
	});
};

userController.list = (req, res, next) => {
	User.find({})
		.then((users) => {
			res.status(200).json(users);
		})
		.catch((err) => {
			next(err);
		});
};

signToken = (user) => {
	return jwt.sign(
		{
			iss: 'sawaProject',
			sub: user.id,
			iat: new Date().getTime(), //current time
			exp: new Date().setDate(new Date().getDate() + 1) //current time + 1 day
		},
		JWT_SECRET
	);
};

userController.signup = async (req, res) => {
	//const image = upload.single('image');
	const { name, last_name, email, username, password, date_of_birth, gender, created_at } = req.value.body;

	await User.find({ 'local.email': email }).exec().then((user) => {
		if (user.length >= 1) {
			return res.status(409).json({
				message: 'Mail exists'
			});
		} else {
			bcrypt.hash(password, 10, (err, hash) => {
				if (err) {
					return res.status(500).json({
						error: 'err'
					});
				} else {
					let user = new User({
						method: 'local',
						local: {
							name,
							last_name,
							email,
							username,
							password: hash,
							date_of_birth,
							gender,
							created_at,
							image: req.imageFileName
						}
					});

					user.save();
					const token = signToken(user);
					res.status(200).json({ token });

					console.log(req.value.body);

					console.log(token);
				}
			});
		}
	});
};

//GOOGLE SIGN-IN
userController.googleSignin = async (req, res) => {
	console.log('got here');

	const token = signToken(req.user);
	res.status(200).json({ token });
};

//FACEBOOK SIGN-IN
userController.facebookSignin = async (req, res) => {
	const token = signToken(req.user);
	res.status(200).json({ token });
};

userController.signin = async (req, res) => {
	//generate token
	const user = req.user;
	const token = signToken(req.user);
	return res.status(200).json({
		message: 'sign-in successful',
		token: token,
		user
	});
};

userController.secret = (req, res) => {
	console.log('manage to get here');

	res.json({
		message: 'secret resource'
	});
};

// show user by id
userController.show = async (req, res) => {
	const { Id } = req.params;
	const user = await User.findById(Id);
	res.status(200).json(user);
};

//replace show user by id put
userController.replace = async (req, res) => {
	const { Id } = req.params;
	//const newUser = req.body;
	let newUser = {
		name: req.body.name,
		last_name: req.body.last_name,
		date_of_birth: req.body.date_of_birth,
		gender: req.body.gender,
		role: req.body.role,
		profession_id: req.body.profession_id,
		type_of_volunteers: req.body.type_of_volunteers,
		activity_id: req.body.activity_id,
		rating: req.body.rating,
		image: req.imageFileName
	};
	const result = await User.findByIdAndUpdate(Id, newUser);
	console.log(result);
	res.status(200).json({ success: newUser });

	/* res.status(200).json({success: true}); */
};

//update show user by id patch
userController.update = async (req, res) => {
	console.log('file from controller req.imageFileName', req.imageFileName);
	const { Id } = req.params;
	//const newUser = req.body;
	let newUser = {
		name: req.body.name,
		last_name: req.body.last_name,
		date_of_birth: req.body.date_of_birth,
		gender: req.body.gender,
		image: req.imageFileName
	};
	const result = await User.findByIdAndUpdate(Id, newUser);

	console.log(result);

	res.status(200).json({ newUser });
};

//show existing campaigns
userController.getUserCampaigns = async (req, res) => {
	const { Id } = req.params;
	const user = await User.findById(Id).populate({
		path: 'campaign'
	});

	res.status(201).json(user.created_campaigns);
};

userController.createUserCampaign = async (req, res) => {
	const { Id } = req.params;
	//create a new campaign
	const campaign = new Campaign({
		categories: req.body.categories,
		title: req.body.title,
		description: req.body.description,
		created_at: req.body.created_at,
		campaign_location: {
			latitude: req.body.latitude,
			longitude: req.body.longitude
		},
		country_code: req.body.country_code,
		num_of_volunteers: req.body.num_of_volunteers,
		type_of_volunteers: req.body.type_of_volunteers,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		image: req.imageFileName
		// video: req.body.video
	});

	//get user
	const user = await User.findById(Id);
	//assign user as campaign creator
	campaign.created_by = user._id;
	//save campaign
	await campaign.save();
	// add campaign to the users created_by array
	user.created_campaigns.push(campaign);
	//save the user
	await user.save();
	res.status(201).json({ user, campaign });
};

//update user campaign
userController.updateUserCampaign = async (req, res) => {
	const { Id } = req.params;
	//get user
	//const campaign = await Campaign.findById(Id);
	let newCampaign = {
		categories: req.body.categories,
		title: req.body.title,
		description: req.body.description,
		created_at: req.body.created_at,
		campaign_location: {
			latitude: req.body.latitude,
			longitude: req.body.longitude
		},
		country_code: req.body.country_code,
		num_of_volunteers: req.body.num_of_volunteers,
		type_of_volunteers: req.body.type_of_volunteers,
		start_date: req.body.start_date,
		end_date: req.body.end_date,
		image: req.imageFileName
	};
	const result = await Campaign.findByIdAndUpdate(Id, newCampaign);

	console.log(result);
	res.status(201).json({ newCampaign });
};

//delete
userController.delete = (req, res) => {
	User.deleteOne(
		{
			_id: req.params.id
		},
		(error) => {
			if (error) {
				console.log(error);
				res.status(500).json({
					error: error
				});
			} else {
				console.log('User deleted');
				res.status(200).json({
					message: 'User deleted'
				});
			}
		}
	);
};

module.exports = userController;