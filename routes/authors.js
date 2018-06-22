var express = require('express');
var router = express.Router();
const db = require('../db');
const helper = require('../public/js/helper');

router.get('/:author_id/:author_name', function (req, res, next) {

  const idUser = req.user ? req.user.idUser : null

  db.book.findAll({
    where: {
      idAuthor: req.params.author_id,
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

        const booksContainer = []

        result.forEach(book => {

          booksContainer.push({
            details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
            author: book.author,
            marksArr: book.marks ? book.marks : null, // mabye to remove
            avgMark: helper.getAverageMarkForBook(result.marks),
            userMark: helper.getUserMarkForBook(result.marks, idUser),
            status: (result.statuses) ? helper.getBookStatusForUser(result.statuses, idUser) : null,
            volNumberInSeries: (book.bookseries.length > 0) ? book.bookseries[0].booksNumber : null,
            series: (book.bookseries.length > 0) ? book.bookseries[0].series : null
          })

        });
        console.log(JSON.stringify(booksContainer, null, 2));


        res.render('authors', { booksArr: booksContainer, author: req.params.author_name, result, user: req.user })

      } else {
        res.send("Nie znaleziono ksiażek takiego autora w bazie");
      }
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    })

})

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});

module.exports = router;