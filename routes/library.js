const express = require('express');
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const router = express.Router();
const db = require('../db');
const helper = require('../public/js/helper');
const Op = Sequelize.Op;


router.get('/', auth(), function (req, res) {

    // checking inf user has any books in his library (status: "to_read", "reading" or "done")
    db.statuses.findAll({
        where: {
            idUser: req.user.idUser
        }
    })
    .then(statuses => {

        let idBookArr = []
        statuses.forEach(status => {
            idBookArr.push(status.idBook)
        });
        // console.log(JSON.stringify(idBookArr, null, 2));
        return idBookArr
    })
    .then(idsArr => {
        // finding all books from user library
        db.book.findAll({
            where: {
                idBook: {
                    [Op.in]: idsArr
                }
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
                    // console.log(JSON.stringify(result, null, 2));
                    const booksContainer = []

                    result.forEach(book => {
                        if (typeof book !== 'undefined' && book !== null) {                        
                            booksContainer.push({
                                details:            book,
                                author:             book.author,
                                marksArr:           ((typeof book.marks !== 'undefined' && book.marks !== null) ? book.marks : null),
                                avgMark:            helper.getAverageMarkForBook(book.marks),
                                userMark:           helper.getUserMarkForBook(book.marks, req.user.idUser),
                                status:             ((typeof book.statuses !== 'undefined' && book.statuses !== null) ? helper.getBookStatusForUser(book.statuses, req.user.idUser) : null),
                                volNumberInSeries:  ((typeof book.bookseries !== 'undefined' && book.bookseries !== null) ? ((book.bookseries.length > 0) ? book.bookseries[0].booksNumber : null) : null),
                                series:             ((typeof book.bookseries !== 'undefined' && book.bookseries !== null) ? ((book.bookseries.length > 0) ? book.bookseries[0].series : null) : null)
                            })
                        } else {
                            console.log("Book undefined or null")
                        }
                    })

                    res.render('library', { booksArr: booksContainer, result, user: req.user })
                } else {
                    res.send("Nie znaleziono ksiażek takiego usera w bazie");
                }
            })
        })
        .catch(error => {
            console.log(error);
            res.render('library', { booksArr: null, user: req.user });
            // res.status(400).send(error);
        });

});

module.exports = router;