var express = require('express');
var router = express.Router();
const db = require('../db');


router.get('/', function (req, res, next) {
    db.book.findAll({
        limit: 4,

        include: [
            db.author,
        ]
    })
        .then(result => {
            const booksContainer = [];
            const cat = [];

            result.forEach(book => {

                booksContainer.push({
                    details: book, // there are also marks, statuses, series ect. but here they are 'harder' to get and display
                    author: book.author
                })
            });

            db.book.aggregate('category', 'DISTINCT', { plain: false })
                .map(function(row){ return row.DISTINCT })
                .then(function(result){

                    result.forEach(ctg=>{
                        cat.push(ctg);
                    });
                })
                .catch(error => {
                    console.log(error);
                    res.send("Nie znaleziono kategorii w bazie")
                });

            res.render('books', { booksArr: booksContainer, catArr: cat, user: req.user })
        })
        .catch(error => {
            console.log(error);
            res.send("Nie znaleziono książek w bazie")
        });
});

module.exports = router;