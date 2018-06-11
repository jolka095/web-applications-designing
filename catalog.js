var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const db = require('../db');
const Op = Sequelize.Op

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});


router.get('/', function (req, res, next) {
  db.book_info.findAll()
      .then(result => {
          db.category.findAll()
              .then(result2=> {
                  if (req.user) {
                      db.user.findAll({
                          include: [{model: db.book_info, include: [db.book_status]}],
                          where: {idusers: req.user.idusers}
                      })
                          .then(result3 => {

                              db.book_info.findAll({
                                  where: {
                                      idbooks:
                                          {
                                              [Op.notIn]: db.book_status.findAll({where: {idusers: req.user.idusers}})
                                                  .catch(error5 => {
                                                      res.status(400).send(error5);
                                                      console.log(error5);
                                                  })
                                          }
                                  }
                              })
                                  .then(result4 => {
                                      res.render('catalog', {
                                          booksArr: result.get(),
                                          catArr: result2.get(),
                                          user: req.user,
                                          libraryArr: result3.get(),
                                          not_librarayArr: result4.get()
                                      })

                                  })
                                  .catch(error4 => {
                                      const message = "Nie znaleziono żadnych książek w biblioteczce";
                                      // res.render('resource_not_found', { message: message })
                                      res.render('catalog', {
                                          booksArr: result.get(),
                                          catArr: result2.get(),
                                          user: req.user,
                                          libraryArr: 0,
                                          not_librarayArr: result4.get()
                                      }) //  0 gdy książek nie ma w biblioteczce

                                      res.status(400).send(error4);
                                      console.log(error4);
                                  })
                          })
                          .catch(error3 => {
                              const message = "Nie znaleziono żadnych książek w biblioteczce";
                              // res.render('resource_not_found', { message: message })
                              res.render('catalog', {
                                  booksArr: result.get(),
                                  catArr: result2.get(),
                                  user: req.user,
                                  libraryArr: 0,
                                  not_librarayArr: 0
                              }) //  0 gdy książek nie ma w biblioteczce
                              res.status(400).send(error3);
                              console.log(error3);
                          });
                  }
              })
              .catch(error2 => {
                  res.send("Nie znaleziono kategorii w bazie")
                  res.status(400).send(error2);
                  console.log(error2);
              });
        })
      .catch(error => {
          res.send("Nie znaleziono książek w bazie")
          res.status(400).send(error);
          console.log(error);
        });
});

module.exports = router;