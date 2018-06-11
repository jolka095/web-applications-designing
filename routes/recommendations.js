var express = require('express');
var router = express.Router();
const auth = require('../authentication/middleware');
const Sequelize = require('sequelize');
const db = require('../db');

router.get('/', auth(), function (req, res, next) {
    db.user.findAll({
        where:{
            email: req.user.email
        },
        raw: true
    })
    .then(result=>{
        res.render('recommendations', { userData: result.username, user: req.user });
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    });
});

module.exports = router;