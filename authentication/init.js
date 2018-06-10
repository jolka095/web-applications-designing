const passport = require('passport');
const Sequelize = require('sequelize');
const LocalStrategy = require('passport-local').Strategy;

const authenticationMiddleware = require('./middleware');
const db =  require('../db');
const User = require('../models/user');

passport.serializeUser(function(user, done){
    done(null, user.idusers);
});

passport.deserializeUser(function(iduser, done){
    db.user.findById(iduser)
        .then(result=>{
            done(null, result.get());
        })
        .catch(error => {
                res.status(400).send(error);
                console.log(error);
            });
});

function initPassport() {

    passport.use('local', new LocalStrategy({
            usernameField: 'email',
            passwordField: 'password',
            passReqToCallback: true
        },

        function (req, username, password, done) {
            if (!username || !password) {
                return done(null, false);
            }

            db.user.findOne({
                where: {email: username, password: password}
            })
                .then(result=>{
                    var encPassword = result.email;
                    var dbPassword = result.password;

                    return done(null, result.get());
                })
                .catch(error => {
                    res.status(400).send(error);
                    console.log(error);
                });
        }
    ));

    passport.authenticationMiddleware = authenticationMiddleware;
}

module.exports = initPassport;