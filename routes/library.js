const express = require('express');
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const db = require('../db');
const Book = require('../models/book');
const BookStatus = require('../models/book_status');
const User = require('../models/user');
const router = express.Router();

router.get('/', auth(), function (req, res) {

    db.user.findAll({
        where: {idusers: req.user.idusers},
        include: [{model: db.book, include: [db.book_status]}]
    })
        .then(result=>{
            res.render('library', { booksArr: result.get(), user: req.user })
        })
        .catch(error => {
            res.render('library', { booksArr: null, user: req.user })
            res.status(400).send(error);
            console.log(error);
        });
});

module.exports = router;