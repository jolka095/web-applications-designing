var express = require('express');
var router = express.Router();
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

      if (result === null || result === undefined || result.length === 0) {
        res.send("Nie znaleziono takiego autora w bazie");
      } else {

        const booksContainer = []

        result.forEach(book => {

          booksContainer.push({
            details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
            author: book.author,
            marksArr: book.marks ? book.marks : null, // mabye to remove
            avgMark: getAverageMarkForBook(book.marks),
            userMark: getUserMarkForBook(book.marks, idUser),
            status: (book.statuses.length > 0) ? getBookStatusForUser(book.statuses, idUser) : null,
            volNumberInSeries: (book.bookseries.length > 0) ? book.bookseries[0].booksNumber : null,
            series: (book.bookseries.length > 0) ? book.bookseries[0].series : null
          })

        });
        console.log(JSON.stringify(booksContainer, null, 2));


        res.render('authors', { booksArr: booksContainer, author: req.params.author_name, result, user: req.user })
      }
    })
    .catch(error => {
      res.status(400).send(error);
      console.log(error);
    })


})

router.get('/:book_id', function (req, res, next) {
  res.redirect(`/book_profile/${req.params.book_id}`);
});





// const queryStatement = `SELECT * FROM book_info WHERE author_id = ${req.params.author_id} order by author_id, vol_in_series; `;

// db.query(queryStatement, (error, result) => {

//   if (result === null || result === undefined || result.length === 0) {

//     res.send("Nie znaleziono książek takiego autora w bazie")

//   } else {
//     if (req.user) {
//       const queryStatement3 = `SELECT * FROM users natural join book_status natural join books natural join book_info WHERE idusers = "${req.user[0].idusers}" AND author_id = ${req.params.author_id} order by author_id, vol_in_series;  `;            
//       db.query(queryStatement3, (error, result3) => { 

//         if (result3 === null || result3 === undefined || result3.length === 0) {
//             // console.log(JSON.stringify(result2[0], null, 2));
//             const message = "Nie znaleziono żadnych książek w biblioteczce";
//             // res.render('resource_not_found', { message: message })
//             res.render('authors', { booksArr: result, author: req.params.author_name, user: req.user, libraryArr:  0, not_libraryArr: 0}) //  0 gdy książek nie ma w biblioteczce

//         } else{
//             const queryStatement4 = `SELECT * FROM book_info WHERE book_info.book_id NOT IN (SELECT idbooks FROM book_status where idusers = ${req.user[0].idusers}) AND author_id = ${req.params.author_id} order by author_id, vol_in_series; `;           
//             db.query(queryStatement4, (error, result4) => { 

//                 if (result4 === null || result4 === undefined || result4.length === 0) {
//                     // console.log(JSON.stringify(result2[0], null, 2));
//                     const message = "Nie znaleziono żadnych książek w biblioteczce";
//                     // res.render('resource_not_found', { message: message })
//                     res.render('authors', { booksArr: result, author: req.params.author_name, user: req.user, libraryArr: result3, not_libraryArr: 0}) //  0 gdy książek nie ma w biblioteczce

//                 } 
//                 else{
//                   res.render('authors', { booksArr: result, author: req.params.author_name, user: req.user, libraryArr: result3, not_libraryArr: result4 })
//                 }
//             })
//           }
//       })
//     }else {
//       res.render('authors', { booksArr: result, author: req.params.author_name, result, user: req.user })
//     }
//   }
// })

// });

module.exports = router;