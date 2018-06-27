var express = require('express');
var router = express.Router();
const auth = require('../authentication/middleware');
const Sequelize = require('sequelize');
const db = require('../db');
const helper = require('../public/js/helper');


// empty profile
router.get('/', (req, res, next) => {
    res.redirect('/');
});

router.get('/:book_id', (req, res, next) => {
    const idUser = req.user ? req.user.idUser : undefined;

    db.book.findOne({
        where: {
            idBook: req.params.book_id,
        },

        include: [
            db.author,
            db.mark,
            db.statuses,
            {
                model: db.bookSeries,
                include: [db.series]
            }
        ]
    })
        .then(result => {

            if (typeof result !== 'undefined' && result !== null) {

                // helper object representing single book
                const bookObject = {
                    details: result,
                    author: result.author,
                    marksArr: ((typeof result.marks !== 'undefined' && result.marks !== null) ? result.marks : null),
                    avgMark: helper.getAverageMarkForBook(result.marks),
                    userMark: helper.getUserMarkForBook(result.marks, idUser),
                    status: ((typeof result.statuses !== 'undefined' && result.statuses !== null) ? helper.getBookStatusForUser(result.statuses, idUser) : null),
                    volNumberInSeries: ((typeof result.bookseries !== 'undefined' && result.bookseries !== null) ? ((result.bookseries.length > 0) ? result.bookseries[0].booksNumber : null) : null),
                    series: ((typeof result.bookseries !== 'undefined' && result.bookseries !== null) ? ((result.bookseries.length > 0) ? result.bookseries[0].series : null) : null)

                }

                //console.log(JSON.stringify(bookObject, null, 2));
                //console.log(JSON.stringify(result, null, 2));
                res.render('book_profile', { book: bookObject, user: idUser })
            } else {
                res.send("Nie znaleziono takiej ksiażki w bazie");
            }

        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });

});

router.post('/rate_book/:book_id/', (req, res, next) => {
    if (req.user) {
        const mk = parseInt(req.body.mark);

        db.mark.findOne({
            where: {
                idBook: req.params.book_id,
                idUser: req.user.idUser
            }
        }).then(result => {

            if (typeof result !== 'undefined' && result !== null) {
                const mark = {
                    idBook: req.params.book_id,
                    idUser: req.user.idUser,
                    mark: mk,
                };
                const where = {
                    where: {
                        idMark: result.idMark
                    }
                };

                db.mark.update(mark, where)
                    .then(marks => {
                        // let's assume the default of isAdmin is false:
                        console.log('Status changed: '+marks)
                        res.redirect(`/catalog/${req.params.book_id}`)
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(400).send(error);
                    });

            } else {
                db.mark.create({
                    idBook: req.params.book_id,
                    idUser: req.user.idUser,
                    mark: mk,
                })
                    .then(marks => {
                        // let's assume the default of isAdmin is false:
                        console.log('Status added: '+marks.get({plain: true}))
                        res.redirect(`/catalog/${req.params.book_id}`)

                    })
                    .catch(error => {
                        console.log(error);
                        res.status(400).send(error);
                    });
            }
        })
            .catch(error => {
                console.log(error);
                res.status(400).send(error);
            });
    }
});

router.post('/add/:book_id', function (req, res, next) {
    if (req.user) {
        db.statuses.findOne({
            where: {
                idBook: req.params.book_id,
                idUser: req.user.idUser
            }
        }).then(result => {

            if (typeof result !== 'undefined' && result !== null) {
                const stats = {
                    idBook: req.params.book_id,
                    idUser: req.user.idUser,
                    stat: req.body.status,
                };
                const where = {
                    where: {
                        idStat: result.idStat
                    }
                };


                db.statuses.update(stats, where)
                    .then(status => {
                        // let's assume the default of isAdmin is false:
                        console.log('Status changed: '+status)
                        res.redirect(`/catalog/${req.params.book_id}`)
                    })
                    .catch(error => {
                        console.log(error);
                        res.status(400).send(error);
                    });

            } else {
                db.statuses.create({
                    idBook: req.params.book_id,
                    idUser: req.user.idUser,
                    stat: req.body.status,
                })
                    .then(status => {
                        // let's assume the default of isAdmin is false:
                        console.log('Status added: '+status.get({plain: true}))
                        res.redirect(`/catalog/${req.params.book_id}`)

                    })
                    .catch(error => {
                        console.log(error);
                        res.status(400).send(error);
                    });
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });
    }
});

router.post('/remove/:book_id', function (req, res, next) {
    if (req.user) {
        db.statuses.destroy({
            where: {
                idBook: req.params.book_id,
                idUser: req.user.idUser
            }
        })
            .then(() => {
                res.redirect(`/catalog/${req.params.book_id}`)
            })
            .catch(error => {
                console.log(error);
                res.status(400).send("could not delete from library");
            });
    }
});

module.exports = router;