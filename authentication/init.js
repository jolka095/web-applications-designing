const passport = require('passport');
const Sequelize = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;

const authenticationMiddleware = require('./middleware');
const db =  require('../db');

passport.serializeUser(function(user, done){
    done(null, user.idUser);
});

passport.deserializeUser(function(iduser, done){
    db.user.findById(iduser)
        .then(result=>{
            done(null, result.get());
        })
        .catch(error => {
            console.log(error);
            done(error, null);
           // res.status(400).send(error);
        });
});

function initPassport() {

    passport.use('local', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, email, password, done) {
            if (!email || !password) {
                return done(null, false);
            }

            db.user.findAll({
                where: {email: email, password: password},
                raw: true
            })
                .then(result=>{
                    console.log(result[0]);
                    console.log('l: '+result[0].email +' p: '+ result[0].passwrd);

                    if (!result[0] && !isValidPassword(result[0].password,password)) {
                        return done(null, false);
                    }

                    var encPassword = email;
                    var dbPassword = password;

                    return done(null, result[0]);
                })
                .catch(error => {
                    console.log(error);
                    //res.status(400).send(error);
                    return done(null, false, {message:error})
                });
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;