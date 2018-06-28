var express = require('express');
var router = express.Router();
const db = require('../db');
const helper = require('../public/js/helper');

router.get('/:series_id/:series_name', function (req, res, next) {

  const idUser = req.user ? req.user.idUser : null

  db.book.findAll({
    include: [
      db.author,
      db.mark,
      db.statuses,
      {
        model: db.bookSeries,
        include: [db.series],
        where: {
          idSeries: req.params.series_id,
        }
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

        res.render('series', { booksArr: booksContainer, series: req.params.series_name, user: req.user })
      } else {
        res.send("Nie znaleziono ksiażek w tej serii w bazie");
      }
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    })

});

module.exports = router;
