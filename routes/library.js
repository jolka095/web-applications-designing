const express = require('express');
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const router = express.Router();
const db = require('../db');

router.get('/', auth(), function (req, res) {
    db.statuses.findAll({
        where: {idUser: req.user.idUser},
        include: [{ model: db.book, include: [db.author]}]
    })
        .then(result=>{
            const statContainer = [];

            result.forEach(stat => {

                statContainer.push({
                    status: stat,
                    details: stat.book,
                    author: stat.book.author
                });
            });
            //console.log(JSON.stringify(result, null, 2));
            //console.log(JSON.stringify(statContainer, null, 2));
            res.render('library', { booksArr: statContainer, user: req.user });
        })
        .catch(error => {
            console.log(error);
            res.render('library', { booksArr: null, user: req.user });
            // res.status(400).send(error);
        });
});

module.exports = router;