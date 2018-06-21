var express = require('express');
var router = express.Router();
const auth = require('../authentication/middleware');
const Sequelize = require('sequelize');
const db = require('../db');

const getAverageMarkForBook = (marksArray) => {
    let sum = 0;
    let avg = 0;


    if (marksArray == null || marksArray == undefined || marksArray == null || marksArray.length < 1) {
        console.log("THIS BOOK DOES NOT HAVE ANY MARKS YET")
    } else {
        for (let i = 0; i < marksArray.length; i++) {
            sum += marksArray[i].mark
        }
        avg = sum / marksArray.length
    }
    return avg.toFixed(2)
}

const getUserMarkForBook = (marksArray, userId) => {

    let mark = null

    if (userId == null || userId == undefined || marksArray == null) {
        console.log("This user didn't mark this book or this book has no marks")
    } else {
        for (let i = 0; i < marksArray.length; i++) {
            if (marksArray[i].idUser == userId) {
                mark = marksArray[i].mark
            }
        }
    }

    return mark
}

const getBookStatusForUser = (statusesArr, userId) => {

    let status = null

    if (userId == null || userId == undefined || statusesArr.length < 1) {
        console.log("This user didn't set status of this book or this book has no statuses")
    } else {
        for (let i = 0; i < statusesArr.length; i++) {
            if (statusesArr[i].idUser == userId) {
                status = statusesArr[i].stat
            }
        }
    }

    return status
}

// empty profile
router.get('/', (req, res, next) => {
    res.redirect('/');
});

router.get('/:book_id', (req, res, next) => {

    const idUser = req.user ? req.user.idUser : undefined

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

            if (result === null || result === undefined || result.length === 0) {
                res.send("Nie znaleziono takiej ksiażki w bazie");
            } else {

                // helper object representing single book
                const bookObject = {
                    details: result, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                    author: result.author,
                    marksArr: result.marks ? result.marks : null, // mabye to remove
                    avgMark: getAverageMarkForBook(result.marks),
                    userMark: getUserMarkForBook(result.marks, idUser),
                    status: (result.statuses.length > 0) ? getBookStatusForUser(result.statuses, idUser) : null,
                    volNumberInSeries: (result.bookseries.length > 0) ? result.bookseries[0].booksNumber : null,
                    series: (result.bookseries.length > 0) ? result.bookseries[0].series : null
                }

                console.log(JSON.stringify(bookObject, null, 2));
                // console.log(JSON.stringify(result, null, 2));
                res.render('book_profile', { book: bookObject, user: req.user ? req.user : null })
            }
        })
        .catch(error => {
            res.status(400).send(error);
            console.log(error);
        });

});

router.post('/rate_book/:book_id/user/:user_id', (req, res, next) => {

    const mark = parseInt(req.body.mark) + 1;
    const queryStatement1 = `DELETE FROM book_marks WHERE idusers = ${req.params.user_id} AND idbooks = ${req.params.book_id}`;

    const queryStatement = `INSERT INTO book_marks (idbooks, idmarks, idusers)
    VALUES ( ${req.params.book_id}, ${mark}, ${req.params.user_id} )`;

    console.log("queryStatement\n", queryStatement);
    db.query(queryStatement1, (error2, result2) => {
        if (error2) {
            console.log("error ocurred", error2);
            res.send(JSON.stringify({
                "code": 400,
                "failed": "error ocurred"
            }, null, 2))
        } else {
            console.log(`Usunięto ${req.params.book_id} przez usera ${req.params.user_id}`);
            db.query(queryStatement, (error, result) => {

                if (error) {
                    console.log("error ocurred", error);
                    res.send(JSON.stringify({
                        "code": 400,
                        "failed": "error ocurred"
                    }, null, 2))
                } else {
                    console.log(`Oceniono książkę ${req.params.book_id} przez usera ${req.params.user_id} na ${mark}`);
                    res.redirect(`/book_profile/${req.params.book_id}`)
                }
            })
        }
    })
});

router.post('/add_to_read/:book_id', function (req, res, next) {


    var book_st = {
        "idbooks": req.params.book_id,
        "idusers": req.user[0].idusers,
        "idstatus": 2
    };

    var books_to_read = `SELECT COUNT(*) as count FROM book_status WHERE idbooks= ${req.params.book_id} AND idstatus=2`;
    var read_books = `SELECT COUNT(*) as count FROM book_status WHERE idbooks= ${req.params.book_id} AND idstatus=1`;

    db.query(read_books, function (err, result) {
        var read = result[0].count;
        db.query(books_to_read, function (err, result1) {
            var to_read = result1[0].count;

            if (read === 0 && to_read === 0) {
                db.query(`INSERT into book_status SET ?`, book_st, function (err) {
                    if (err) {
                        res.send({
                            "code": 400,
                            "failed": "could not add to library"
                        })
                    } else {
                        if (to_read > 0) {
                            db.query(`DELETE from book_status WHERE idbooks=${req.params.book_id} AND idstatus=2`), function (err) {
                                if (err) {
                                    res.send({
                                        "code": 400,
                                        "failed": "could not delete from library"
                                    })
                                } else {
                                    res.redirect(`/catalog/${req.params.book_id}`)
                                }
                            };

                            res.redirect(`/catalog/${req.params.book_id}`)
                        } else {
                            res.redirect(`/catalog/${req.params.book_id}`)
                        }
                    }
                });
            } else {
                res.redirect(`/catalog/${req.params.book_id}`)
            }
        });
    });
});


router.post('/add_to_read/remove/:book_id', function (req, res, next) {

    const query = `DELETE from book_status WHERE idbooks=${req.params.book_id} AND idstatus=2 AND idusers=${req.user[0].idusers};`;

    db.query(query, function (err) {
        if (err) {
            res.send({
                "code": 400,
                "failed": "could not delete from library"
            })
        } else {
            res.redirect(`/catalog/${req.params.book_id}`)
        }
    })

});


router.post('/read/remove/:book_id', function (req, res, next) {

    const query = `DELETE from book_status WHERE idbooks=${req.params.book_id} AND idstatus=1 AND idusers=${req.user[0].idusers};`;

    db.query(query, function (err) {
        if (err) {
            res.send({
                "code": 400,
                "failed": "could not delete from library"
            })
        } else {
            res.redirect(`/catalog/${req.params.book_id}`)
        }
    })

});

router.post('/read/:book_id', function (req, res, next) {


    var book_st = {
        "idbooks": req.params.book_id,
        "idusers": req.user[0].idusers,
        "idstatus": 1
    };

    var books_to_read = `SELECT COUNT(*) as count FROM book_status WHERE idbooks= ${req.params.book_id} AND idstatus=2`;
    var read_books = `SELECT COUNT(*) as count FROM book_status WHERE idbooks= ${req.params.book_id} AND idstatus=1`;

    db.query(read_books, function (err, result) {
        var read = result[0].count;
        db.query(books_to_read, function (err, result1) {
            var to_read = result1[0].count;
            if (read === 0) {
                db.query(`INSERT into book_status SET ?`, book_st, function (err, rows) {
                    if (err) {
                        res.send({
                            "code": 400,
                            "failed": "could not add to library"
                        })
                    } else if (to_read > 0) {
                        db.query(`DELETE from book_status WHERE idbooks=${req.params.book_id} AND idstatus=2`), function (err) {
                            if (err) {
                                res.send({
                                    "code": 400,
                                    "failed": "could not delete from library"
                                })
                            } else {
                                res.redirect(`/catalog/${req.params.book_id}`)
                            }
                        };

                        res.redirect(`/catalog/${req.params.book_id}`)
                    } else {
                        res.redirect(`/catalog/${req.params.book_id}`)
                    }
                });
            } else {
                res.redirect(`/catalog/${req.params.book_id}`)
            }
        });
    });
});

module.exports = router;