const express = require('express');
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const router = express.Router();
const db = require('../db');
const helper = require('../public/js/helper');

router.get('/', auth(), function (req, res) {
    const idUser = req.user ? req.user.idUser : null;

    db.statuses.findAll({
        where: {idUser: req.user.idUser},
        include: [{ model: db.book, include: [db.author]}]
    })
        .then(result=>{
            const statContainer = [];

            result.forEach(stat => {

                statContainer.push({
                    status: stat, //? helper.getBookStatusForUser(stat, idUser) : null,
                    details: stat.book,
                    author: stat.book.author
                });
            });

            //console.log('result: '+JSON.stringify(statContainer[0].details, null, 2));
            //console.log('stat: '+JSON.stringify(statContainer[0].author, null, 2));
            res.render('library', { booksArr: statContainer, user: req.user });
        })
        .catch(error => {
            console.log(error);
            res.render('library', { booksArr: null, user: req.user });
            // res.status(400).send(error);
        });


});

module.exports = router;