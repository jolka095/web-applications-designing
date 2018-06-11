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
            if (result === null || result === undefined) {
                res.render("Nie znaleziono takiego użytkownika")
            }
            else {
                res.render('user-profile', { userData: result.get(), user: req.user})
            }
        })
        .catch(error => {
            res.status(400).send(error);
            console.log(error);
        });

});


module.exports = router;
