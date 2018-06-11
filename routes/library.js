const express = require('express');
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const router = express.Router();
const db = require('../db');

router.get('/', auth(), function (req, res) {

    db.user.findAll({
        where: {idusers: req.user.idusers},
        include: [db.book_status, db.book_marks],
        raw: true
    })
        .then(result=>{
            console.log(result);
            res.render('library', { booksArr: result, user: req.user })
        })
        .catch(error => {
            console.log(error);
            res.render('library', { booksArr: null, user: req.user });
            res.status(400).send(error);
        });


});

module.exports = router;