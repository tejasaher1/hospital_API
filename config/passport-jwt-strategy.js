const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const drUser = require('../Model/DoctorModel')

var opts = {
    jwtFromRequest : ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey : 'secret'
}



passport.use(new JwtStrategy(opts, function(jwtPayLoad, done) {
    drUser.findById(jwtPayLoad._id)
    .then(function(user){
        if(user){
            return done(null, user);
        }else{
            return done(null, false);
        }
    })
    .catch(function(error){
        console.log('Error in JWT authentication', error);
        return done(error,false);
    })
}));


module.exports = passport;