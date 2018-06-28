var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});

router.get('/', function (req, res, next) {

    if (req.user) {
        var cat = [];

        db.book.aggregate('category', 'DISTINCT', { plain: false })
            .map(function(row){ return row.DISTINCT })
            .then(function(result){
                result.forEach(ctg=>{
                    cat.push(ctg);
                });
            })
            .catch(error => {
                console.log(error);
                res.send("Nie znaleziono kategorii w bazie")
            });

//---------------------------------------------------------------------------
        db.book.findAll({
            include: [
                db.author,
            ]
        })
            .then(result => {
                const booksContainer = [];

                result.forEach(book => {

                    booksContainer.push({
                        details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                        author: book.author
                    })

                });

                db.statuses.findAll({
                    where: {idUser: req.user.idUser},
                    include: [{ model: db.book, include: [db.author]}]
                })
                    .then(result2=> {
                        const statContainer = [];

                        result2.forEach(stat => {

                            statContainer.push({
                                status: stat, //? helper.getBookStatusForUser(stat, idUser) : null,
                                details: stat.book,
                                author: stat.book.author
                            });
                        });
                        db.statuses.aggregate('idBook', 'DISTINCT', { where: {idUser:{[Op.eq]:[req.user.idUser]}},plain: false })
                            .map(function(row){ return row.DISTINCT })
                            .then(function(result3){

                                db.book.findAll({
                                    include: [
                                        db.author
                                    ],
                                    where: {
                                        idBook: {
                                            [Op.notIn]: result3
                                        }
                                    }
                                })
                                    .then(result4=>{
                                        const notBooksContainer = [];

                                        result4.forEach(book => {

                                            notBooksContainer.push({
                                                details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                                                author: book.author
                                            })
                                        });



                                        if (result2 === null || result2 === undefined || result2.length === 0) {
                                            const message = "Nie znaleziono żadnych książek w biblioteczce";
                                            res.render('catalog', {
                                                booksArr: booksContainer,
                                                catArr: cat,
                                                user: req.user,
                                                libraryArr: 0,
                                                not_libraryArr: booksContainer
                                            })
                                        } else if (result4 === null || result4 === undefined || result4.length === 0) {
                                            const message = "Nie znaleziono żadnych książek w biblioteczce";
                                            res.render('catalog', {
                                                booksArr: booksContainer,
                                                catArr: cat,
                                                user: req.user,
                                                libraryArr: booksContainer,
                                                not_libraryArr: 0
                                            })
                                        } else {
                                            res.render('catalog', {
                                                booksArr: booksContainer,
                                                catArr: cat,
                                                user: req.user,
                                                libraryArr: statContainer,
                                                not_libraryArr: notBooksContainer
                                            })
                                        }

                                    })
                                    .catch(error4 => {
                                        console.log(error4);
                                        res.status(400).send(error4);
                                    });

                            })
                            .catch(error3 => {
                                console.log(error3);
                                res.status(400).send(error3);
                            });
                })
                .catch(error2 => {
                    console.log(error2);
                    res.send("Nie znaleziono kategorii w bazie")
                });
            })
            .catch(error => {
                console.log(error);
                res.send("Nie znaleziono książek w bazie")
            });
    } else{
        res.redirect('/');
    }
});

module.exports = router;