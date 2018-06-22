var express = require('express');
var router = express.Router();
const db = require('../db');


router.get('/:what', function (req, res, next) {

  db.book.findAll({
    limit: 4,

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
        res.send("Nie znaleziono żadnych kategorii w bazie");
      } else {
        console.log(JSON.stringify(result, null, 2));
        res.render('no_results', { booksArr: result, what: req.params.what, user: req.user })
      }
    })
    .catch(error => {
      console.log(error);
      res.status(400).send(error);
    });

})
module.exports = router;