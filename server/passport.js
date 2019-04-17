const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const LocalStrategy = require('passport-local').Strategy;
// const GooglePlusTokenStrategy = require('passport-google-plus-token');
// const FacebookStrategy = require('passport-facebook-token');
const { JWT_SECRET } = require('./config/jwt-config');
// const config = require('./config/config');

const User = require('./models/Users');
// const bcrypt = require('bcrypt');

passport.use(new JwtStrategy({
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretOrKey: JWT_SECRET
}, async (payload, done) => {
  try {
    //find user specified in token
    const user = await User.findById(payload.sub);


    // case user doesn`t exist
    if (!user) {
      return done(null, false);
    }

    //otherwise return user

    done(null, user);

  } catch (error) {
    done(error, false)
  }

}));


//google oauth Strategy
// passport.use('googleToken', new GooglePlusTokenStrategy({
//   clientID: '',
//   clientSecret: ''
// }, async (accessToken, refreshToken, profile, done) => {
//   try {

//     console.log('accessToken', accessToken);
//     console.log('refreshToken', refreshToken);
//     console.log('profile', profile);

//     //check if user exists
//     const existingUser = await User.findOne({
//       "google.id": profile.id
//     });
//     if (existingUser) {
//       console.log('user already exists in db');

//       return done(null, existingUser);

//     }
//     console.log('creating a new user in db');

//     //if new user
//     const newUser = new User({
//       method: 'google',
//       google: {
//         id: profile.id,
//         email: profile.emails[0].value
//       }

//     });

//     await newUser.save();
//     done(null, newUser);

//   } catch (error) {
//     done(error, false, error.message);
//   }



// }));

//local strategy

passport.use(new LocalStrategy({
  usernameField: 'email'
}, async (email, password, done) => {

  try {
    // Find the user given the email
    const user = await User.findOne({ "local.email": email });

    // If not, handle it
    if (!user) {
      return done(null, false);
    }


    // Check if the password is correct
    const isMatch = await user.isValidPassword(password);
    console.log('isMatch', isMatch);

    // If not, handle it
    if (!isMatch) {
      return done(null, false);
    }

    // Otherwise, return the user
    done(null, user);
  } catch (error) {
    done(error, false);
  }
}));




//facebook strategy
/*

passport.use('facebookToken', new FacebookStrategy({
  clientID: config.oauth.facebook.clientSecret,
  clientSecret: config.oauth.facebook.clientSecret
},
  async (accessToken, refreshToken, profile, done) => {
    try {

      console.log('accessToken', accessToken);
      console.log('refreshToken', refreshToken);
      console.log('profile', profile);

      //check if user exists
      const existingUser = await User.findOne({ "facebook.id": profile.id });
      if (existingUser) {

        console.log('user already exists in db');

        return done(null, existingUser);

      }
      console.log('creating a new user in db');

      //if new user
      const newUser = new User({
        method: 'facebook',
        facebook: {
          id: profile.id,
          email: profile.emails[0].value
        }

      });

      await newUser.save();
      done(null, newUser);

    } catch (error) {
      done(error, false, error.message);
    }



  }));*/
