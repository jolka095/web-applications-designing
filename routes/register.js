var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db');

router.get('/', function (req, res, next) {
    res.render('register', { user: req.user });
});
router.get('/login', function (req, res, next) {
    res.render('login', { user: req.user });
});

router.post('/', (req, res, next) => {

    db.user.findOne({
        where:{
            email: req.body.email
        }
    })
    .then(result=>{
        res.redirect('/library');
    })
    .catch(error => {
        console.log(error);
        // res.status(400).send(error);
        next(error)
    });

    db.user.create({
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    })
    .then(result=>{
        var user = {
            "email": req.body.email,
            "username": req.body.username,
            "password": req.body.password
        };
        res.redirect('./library');
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    });


});

module.exports = router;
