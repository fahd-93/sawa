const express = require ('express');
//const router = require('express-promise-router')();
const router = express.Router();
const cors=require('cors');
const passportConf = require('../passport.js')
const passport = require('passport');
const { validateBody, schemas } = require('../routeHelper/routeHelpers')
const userController = require('../controllers/usersController.js');
const userProfileController = require('../controllers/userProfileController.js')

const passportSignin = passport.authenticate('local', {session: false});
const passportjwt = passport.authenticate('jwt', {session: false});
const passportGoogle = passport.authenticate('googleToken', {session:false});
const passportFacebook = passport.authenticate('facebookToken',{session:false});

//get a list of users
router.get('/users/list', cors(), userController.list);


//add a new users to DB
router.route('/users/signup')
.post(validateBody(schemas.authSchema ), cors(), userController.signup);

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

/* router.route('/auth/facebook/callback')
.get(passport.authenticate('facebook', { successRedirect: '/profile',
                                      failureRedirect: '/' }));
   */

//show user profile
router.route('/users/profile')
.post(cors(), userProfileController.creat);
 //show a user
//router.get('/users/:id', cors(), userController.show);
  
//update a users in the DB

//router.put('/users/:id', cors(), userController.update);

//delete a user in the DB
router.delete('/users/:id', cors(), userController.delete);
 

module.exports = router