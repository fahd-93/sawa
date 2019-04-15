const express = require ('express');
const router = require('express-promise-router')();
//const router = express.Router();
const cors=require('cors');
const passportConf = require('../passport.js')
const passport = require('passport');
const { validateBody, schemas } = require('../routeHelper/routeHelpers.js')
const userController = require('../controllers/usersController');
const userProfileController = require('../controllers/userProfileController')
const campaignController = require('../controllers/campaignController.js')

const passportSignin = passport.authenticate('local', {session: false});
const passportjwt = passport.authenticate('jwt', {session: false});
const passportGoogle = passport.authenticate('googleToken', {session:false});
const passportFacebook = passport.authenticate('facebookToken',{session:false});
const { upload } = require('../handlers/multer');

//get a list of users
//router.get('/users', cors(), userController.list);
router.route('/users')
.get(cors(), userController.list);


//add a new users to DB
router.route('/users/signup')
.post(validateBody(schemas.authSchema ), /* upload.single('image'), */ cors(), userController.signup);

//signin
router.route('/users/signin')
.post(validateBody(schemas.signinSchema), passportSignin, cors(), userController.signin); 

//secret
router.route('/users/secret')
.get(passportjwt, cors(), userController.secret);

//signin with google
router.route('/oauth/google')
.post(passportGoogle, userController.googleSignin);

//signin with facebook
 router.route('/oauth/facebook')
.post(passportFacebook, userController.facebookSignin);

// //show user profile
 router.route('/users/profile')
.get(cors(), userProfileController.list)
.post(cors(), upload.single('image'), userProfileController.creat);

 //show a user
 router.route('/users/:Id')
.get(cors(), userController.show)
.put(cors(),upload.single('image'), userController.replace) //replace user
.patch(cors(),upload.single('image'), userController.update); //update user


router.route('/users/:Id/campaign')
.get(cors(), userController.getUserCampaigns)
.post(cors(),upload.single('image'), userController.createUserCampaign)
//update campaign



//show user campaign
router.route('/users/campaign/:Id')
.get(cors(), campaignController.getUserCampaigns)
  
//show user campaign
router.route('/campaign')
.get(cors(), campaignController.getAllCampaigns)
  

//delete a user in the DB
router.delete('/users/:id', cors(), userController.delete);
 

module.exports = router