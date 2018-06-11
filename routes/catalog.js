var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const Op = Sequelize.Op;
const db = require('../db');

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});

/*    db.book_info.findAll()
        .then(result => {
            console.log(result);
        })
        .catch(error => {
            //res.send("Nie znaleziono książek w bazie")
            res.status(400).send(error);
            console.log(error);
        });*/
router.get('/', function (req, res, next) {

  db.book_info.findAll()
      .then(result => {
          if (result === null || result === undefined || result.length === 0) {

              res.send("Nie znaleziono książek w bazie")

          } else {
              db.category.findAll()
                  .then(result2 => {
                      if (result2 === null || result2 === undefined || result2.length === 0) {

                          res.send("Nie znaleziono kategorii w bazie")

                      }  if (req.user) {
                          db.user.findAll({
                              include: [{model: db.book_info, include: [db.book_status]}],
                              where: {idusers: req.user.idusers}
                          })
                              .then(result3 => {
                                  if (result3 === null || result3 === undefined || result3.length === 0) {
                                      // console.log(JSON.stringify(result2[0], null, 2));
                                      const message = "Nie znaleziono żadnych książek w biblioteczce";
                                      // res.render('resource_not_found', { message: message })
                                      res.render('catalog', { booksArr: result, catArr: result2, user: req.user, libraryArr:  0, not_librarayArr: 0}) //  0 gdy książek nie ma w biblioteczce

                                  } else {
                                      db.book_info.findAll({
                                          where: {
                                              idbooks:
                                                  {
                                                      [Op.notIn]: db.book_status.findAll({where: {idusers: req.user.idusers}})
                                                          .catch(error5 => {
                                                              console.log(error5);
                                                              res.status(400).send(error5);
                                                          })
                                                  }
                                          }
                                      })
                                          .then(result4 => {
                                              if (result4 === null || result4 === undefined || result4.length === 0) {
                                                  // console.log(JSON.stringify(result2[0], null, 2));
                                                  const message = "Nie znaleziono żadnych książek w biblioteczce";
                                                  // res.render('resource_not_found', { message: message })
                                                  res.render('catalog', { booksArr: result, catArr: result2, user: req.user, libraryArr:  0, not_librarayArr: result4}) //  0 gdy książek nie ma w biblioteczce

                                              }
                                              else{
                                                  res.render('catalog', { booksArr: result, catArr: result2, user: req.user, libraryArr: result3, not_librarayArr: result4 })
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
        });
});

module.exports = router;