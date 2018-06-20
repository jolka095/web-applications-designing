var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const db = require('../db');

// import Sequelize models
/*
const User = require('../models/user');
const Status = require('../models/status');
const Series = require('../models/series');
const Author = require('../models/author');
const Mark = require('../models/mark');
const Category = require('../models/category');
const Book = require('../models/book');
const BookStatus = require('../models/book_status');
const BookSeries = require('../models/book_series');
const BookMark = require('../models/book_marks');
*/

// finding books version edvanced 3
router.post('/find', (req, res) => {

  console.log(JSON.stringify(req.body, null, 2));

  let id = 0;

  let item = req.body.find_item;
  let search_for = req.body.search_for;

  let sql_condition = '';
  let sql_condition_array = [];
  let sql_query = '';

  if (search_for !== undefined && search_for !== null) {

    if (Array.isArray(search_for)) {

      for (let i = 0; i < search_for.length; i++) {
        sql_condition += ` ${req.body.search_condition[i]} ${search_for[i]} LIKE "%${item[i]}%" `;
        console.log(sql_condition)
      }

    } else {
      sql_condition = `${search_for} LIKE "%${item}%"`
    }

  } else {
    sql_condition = `title LIKE "%${item}%" OR author LIKE "%${item}%" OR category LIKE "%${item}%" OR series LIKE "%${item}%"`
  }

  sql_query = `SELECT * FROM book_info WHERE ${sql_condition} ORDER BY author_id, vol_in_series;`;
  console.log(sql_query);

  //Here maybe???---------------------------
  db.book.findAll({where: {book: item}, raw: true})
    .then(result1=>{
        if (typeof result1 !== 'undefined' && result1.length > 0) {
            id = result1[0].idBook;
            // console.log('id : ', id)
            res.redirect(`/book_profile/${id}`);
        }
        else {
            console.log("\nSzukam dalej po autorze...");
            db.book.findAll({where: {idAuthor: item}, raw: true})
              .then(result2=>{
                  if (typeof result2 !== 'undefined' && result2.length > 0) {
                      id = result2[0].idAuthor;
                      // console.log('id : ', id)
                      res.redirect(`/authors/${id}/${item}`);
                  }
                  else {
                      console.log("\nSzukam dalej po kategorii...");
                      db.book.findAll({where: {category:item}, raw: true})
                        .then(result3=>{
                          if (typeof result3 !== 'undefined' && result3.length > 0) {
                              id = result3[0].category;
                              // console.log('id : ', id)
                              res.redirect(`/categories/${id}/${item}`);
                          }
                          else {
                              console.log("\nSzukam dalej po serii...");
                              db.series.findAll({where: {idSeries: item}, raw: true})
                                .then(results4=>{
                                  if (typeof results4 !== 'undefined' && results4.length > 0) {
                                      id = results4[0].idSeries;
                                      // console.log('id : ', id)
                                      res.redirect(`/series/${id}/${item}`);
                                  }
                                  else {
                                      db.book.findAll({
                                          order: [
                                            // Will escape title and validate DESC against a list of valid direction parameters
                                            ['title', 'DESC'],
                                            [Author, 'idAuthor', 'DESC'],
                                          ],
                                          raw: true
                                      })
                                        .then(result5=>{
                                          if (typeof result5 !== 'undefined' && result5.length > 0) {
                                                  res.render(`results`, { booksArr: result5, what: item, user: req.user })
                                          }
                                          else {
                                              console.log("\nBrak wyników...");
                                              res.redirect(`/no_results/${item}`);
                                          }
                                        })
                                        .catch(error5 => {
                                            console.log(error5);
                                            res.status(400).send(error5);
                                        });
                                  }
                              })
                              .catch(error4 => {
                                  console.log(error4);
                                  res.status(400).send(error4);
                              });
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
    .catch(error1 => {
      console.log(error1);
      res.status(400).send(error1);
    });
});

//??????????????????????
router.get('/', function (req, res, next) {
  db.book.findAll({
      limit: 4,
      raw: true
    })
    .then(result=>{
      if (result === null || result === undefined || result.length === 0) {
        res.send("Nie znaleziono żadnych kategorii w bazie");
      } else {
        console.log(JSON.stringify(result, null, 2));
        res.render('index', { booksArr: result, user: req.user })
      }
    })
    .catch(error => {
        console.log(error);
        res.status(400).send(error);
    });

});

module.exports = router;


// var express = require('express');
// var router = express.Router();
// const auth = require('../authentication/middleware');
// const db = require('../db');

// // import Sequelize models
// const User = require('../models/user')
// const Status = require('../models/status')
// const Series = require('../models/series')
// const Author = require('../models/author')
// const Mark = require('../models/mark')
// const Category = require('../models/category')
// const Book = require('../models/book')
// const BookStatus = require('../models/book_status')
// const BookSeries = require('../models/book_series')
// const BookMark = require('../models/book_marks')

// // finding books version edvanced 3
// router.post('/find', (req, res) => {


//   console.log(JSON.stringify(req.body, null, 2));

//   let id = 0;

//   let item = req.body.find_item;
//   let search_for = req.body.search_for;

//   let sql_condition = '';
//   let sql_condition_array = [];
//   let sql_query = '';

//   if (search_for !== undefined && search_for !== null) {

//     if (Array.isArray(search_for)) {

//       for (let i = 0; i < search_for.length; i++) {
//         sql_condition += ` ${req.body.search_condition[i]} ${search_for[i]} LIKE "%${item[i]}%" `;
//         console.log(sql_condition)
//       }

//     } else {
//       sql_condition = `${search_for} LIKE "%${item}%"`
//     }

//   } else {
//     sql_condition = `title LIKE "%${item}%" OR author LIKE "%${item}%" OR category LIKE "%${item}%" OR series LIKE "%${item}%"`
//   }

//   sql_query = `SELECT * FROM book_info WHERE ${sql_condition} ORDER BY author_id, vol_in_series;`;
//   console.log(sql_query);

//   db.query(`SELECT book_id FROM book_info WHERE title="${item}"`, function (err, rows, fields) {

//     if (typeof rows !== 'undefined' && rows.length > 0) {
//       id = rows[0].book_id;
//       // console.log('id : ', id)
//       res.redirect(`/book_profile/${id}`);
//     }
//     else {
//       console.log("\nSzukam dalej po autorze...");
//       db.query(`SELECT author_id FROM book_info WHERE author="${item}"`, function (err, rows, fields) {

//         if (typeof rows !== 'undefined' && rows.length > 0) {
//           id = rows[0].author_id;
//           // console.log('id : ', id)
//           res.redirect(`/authors/${id}/${item}`);
//         }
//         else {
//           console.log("\nSzukam dalej po kategorii...");
//           db.query(`SELECT category_id FROM book_info WHERE category="${item}"`, function (err, rows, fields) {

//             if (typeof rows !== 'undefined' && rows.length > 0) {
//               id = rows[0].category_id;
//               // console.log('id : ', id)
//               res.redirect(`/categories/${id}/${item}`);
//             }
//             else {
//               console.log("\nSzukam dalej po serii...");
//               db.query(`SELECT series_id FROM book_info WHERE series="${item}"`, function (err, rows, fields) {

//                 if (typeof rows !== 'undefined' && rows.length > 0) {
//                   id = rows[0].series_id;
//                   // console.log('id : ', id)
//                   res.redirect(`/series/${id}/${item}`);
//                 }
//                 else {
//                   db.query(sql_query, function (err, rows, fields) {
//                     if (typeof rows !== 'undefined' && rows.length > 0) {
//                       res.render(`results`, { booksArr: rows, what: item, user: req.user })
//                     }
//                     else {
//                       console.log("\nBrak wyników...");
//                       res.redirect(`/no_results/${item}`);
//                     }
//                   })
//                 }
//               })
//             }
//           })
//         }
//       })
//     }
//   })
// })


// router.get('/', function (req, res, next) {

//   Book.findAll({
//     order: [['idbooks', 'DESC']], // TODO: order by "avg_mark" like in old query:   `SELECT * FROM book_info ORDER BY avg_mark DESC LIMIT 4;`
//     limit: 4
//   })
//     .then(result => {

//       if (result === null || result === undefined || result.length === 0) {
//         res.send("Nie znaleziono żadnych kategorii w bazie")
//       } else {
//         console.log(JSON.stringify(result, null, 2))
//         res.render('index', { booksArr: result, user: req.user })
//       }
//     })
//     .catch(error => {
//       res.status(400).send(error)
//       console.log(error)
//     })

// });

// module.exports = router;