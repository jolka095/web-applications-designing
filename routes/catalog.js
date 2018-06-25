var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');
const helper = require('../public/js/helper');

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});

router.get('/', function (req, res, next) {
/*
    db.book.findAll({
        include: [{
            model: db.author
    }]
    })
    .then(result=>{
        const bookObject = {
            details: result[0], // there are also marks, statuses, series ect. but here they are 'harder' to get and display
            author: result[0].author
        };
        console.log(JSON.stringify("I'm result!" + bookObject.details.book, null, 2));
        console.log(JSON.stringify("I'm author!" + bookObject.author.name, null, 2));
    })
*/

    const idUser = req.user ? req.user.idUser : null;
    db.book.findAll({
        include: [{
            model: db.author,
            required: true
        }]
    })
        .then(result => {

            if (result === null || result === undefined) {
                res.send("Nie znaleziono książek w bazie");
            } else {
                /*/ helper object representing single book
                const bookObject = {
                    details: result[], // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                    author: result[].author
                };     */

                const booksContainer = [];

                result.forEach(book => {

                    booksContainer.push({
                        details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                        author: book.author,
                        marksArr: book.mark ? book.mark : null, // mabye to remove
                        avgMark: helper.getAverageMarkForBook(result.mark),
                        userMark: helper.getUserMarkForBook(result.mark, idUser),
                        status: (result.statuses) ? helper.getBookStatusForUser(result.statuses, idUser) : null,
                        volNumberInSeries: book.bookSeries ? book.bookSeries[0].booksNumber : null,
                        series: book.bookSeries ? book.bookSeries[0].series : null
                    })

                });
                console.log(JSON.stringify(booksContainer, null, 2));

                db.book.aggregate('category', 'DISTINCT', { plain: false })
                    .then(result2=> {
                        if (result2 === null || result2 === undefined) {
                            res.send("Nie znaleziono kategorii w bazie")
                        }
                        if (req.user) {
                           /* db.user.findAll({
                                include: [{model: db.statuses, include: [db.book]}],
                                where: {idUser: req.user.idUser}
                            })
                                .then(result3 => {
                                    if (result3 === null || result3 === undefined) {        */
                                        // console.log(JSON.stringify(result2[0], null, 2));
                                        const message = "Nie znaleziono żadnych książek w bibliotece";

                                        console.log(JSON.stringify("I'm Object!" + booksContainer, null, 2));

                                        res.render('catalog', {
                                            booksArr: booksContainer,
                                            catArr: result2,
                                            user: req.user,
                                            libraryArr: 0,
                                            not_librarayArr: 0
                                        }) //  0 gdy książek nie ma w biblioteczce
/*
                                    }
                                })
                                .catch(error3 => {
                                    console.log(error3);
                                    res.status(400).send(error3);
                                });
*/
                        }
                    })
                    .catch(error2 => {
                        console.log(error2);
                        res.status(400).send(error2);
                    });
            }

        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });

/*
  db.book.findAll({raw: true })
      .then(result => {
          if (result === null || result === undefined || result.length === 0) {
              res.send("Nie znaleziono książek w bazie");
          } else {
            db.book.aggregate('category', 'DISTINCT', { plain: false, raw: true })
                .then(result2=>{
                  if (result2 === null || result2 === undefined || result2.length === 0) {
                      res.send("Nie znaleziono kategorii w bazie")
                  }
                  if (req.user) {
                        db.user.findAll({
                            include: [{model: db.statuses, include: [db.book]}],
                            where: {idUser: req.user.idUser},
                            raw: true
                        })
                            .then(result2 => {
                                if (result2 === null || result2 === undefined || result2.length === 0) {
                                    // console.log(JSON.stringify(result2[0], null, 2));
                                    const message = "Nie znaleziono żadnych książek w bibliotece";
                                    // res.render('resource_not_found', { message: message })
                                    res.render('catalog', {
                                        booksArr: result,
                                        catArr: result2,
                                        user: req.user,
                                        libraryArr: 0,
                                        not_librarayArr: 0
                                    }) //  0 gdy książek nie ma w biblioteczce

                                }
                                /*else {
                                         db.book.findAll({
                                             where: {
                                                 idbooks:
                                                     {
                                                         [Op.notIn]: db.statuses.findAll({where: {idusers: req.user.idusers}})
                                                             .catch(error5 => {
                                                                 console.log(error5);
                                                                 res.status(400).send(error5);
                                                             })
                                                     }
                                             }
                                         })
                                             .then(result3 => {
                                                 if (result3 === null || result3 === undefined || result3.length === 0) {
                                                     // console.log(JSON.stringify(result2[0], null, 2));
                                                     const message = "Nie znaleziono żadnych książek w biblioteczce";
                                                     // res.render('resource_not_found', { message: message })
                                                     res.render('catalog', {
                                                         booksArr: result,
                                                         catArr: result2,
                                                         user: req.user,
                                                         libraryArr: 0,
                                                         not_librarayArr: result3
                                                     }) //  0 gdy książek nie ma w biblioteczce

                                                 }
                                                 else {
                                                     res.render('catalog', {
                                                         booksArr: result,
                                                         catArr: result2,
                                                         user: req.user,
                                                         libraryArr: result3,
                                                         not_librarayArr: result4
                                                     })
                                                 }

                                             })
                                             .catch(error4 => {
                                                 console.log(error4);
                                                 res.status(400).send(error4);
                                             })
                                 }

                            })
                            .catch(error3 => {
                                console.log(error3);
                                res.status(400).send(error3);
                            });
                        }
                  })
                  .catch(error2 => {
                      console.log(error2);
                      res.status(400).send(error2);
                  });
          }

        })
      .catch(error => {
          console.log(error);
          res.status(400).send(error);
        });*/
});

module.exports = router;