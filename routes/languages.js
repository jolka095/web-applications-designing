var express = require('express');
var router = express.Router();
const db = require('../db');


router.get('/:language_name', function (req, res, next) {
    var cat = [];

    db.book.findAll({
        include: [
            db.author,
        ],
        where: {
          lang: req.params.language_name
        }
    })
      .then(result=>{
          const booksContainer = [];

          result.forEach(book => {

              booksContainer.push({
                  details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                  author: book.author
              })

          });

          res.render('languages', { booksArr: booksContainer, lan: req.params.language_name, user: req.user })
      })
      .catch(error => {
          console.log(error);
          res.send("Nie znaleziono książek w takim języku w bazie")
      });
});

module.exports = router;