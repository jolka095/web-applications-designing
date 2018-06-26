var express = require('express');
var router = express.Router();
const auth = require('../authentication/middleware');
const Sequelize = require('sequelize');
const db = require('../db');

router.get('/', auth(), function (req, res, next) {
    if (req.user) {
        db.user.findOne({
            where:{
                email: req.user.email
            },
            raw: true
        })
        .then(result=>{
            res.render('recommendations', { name: result.name, surname: result.surname, user: req.user });
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
    } else{
        res.redirect('/');
    }
});

module.exports = router;