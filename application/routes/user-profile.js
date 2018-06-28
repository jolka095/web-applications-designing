var express = require('express');
var router = express.Router();
const auth = require('../authentication/middleware');
const db = require('../db');

router.get('/', auth(), function (req, res, next) {

    console.log("User zalogowany:", req.user);

    db.user.findOne({
        where:{email: req.user.email}
    })
        .then(result => {
            res.render('user-profile', { username: result.username, password: result.password, email: result.email, user: req.user})
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });

});


module.exports = router;
