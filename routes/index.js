var express = require('express');
var router = express.Router();
const Sequelize = require('sequelize');
const auth = require('../authentication/middleware');
const db = require('../db');
const Op = Sequelize.Op;

router.post('/find', (req, res) => {

    console.log(JSON.stringify(req.body, null, 2));

    // **************************************** ADVANCED SEARCH

    let item = req.body.find_item; // user phrase to find
    let search_for = req.body.search_for; // selected option: title, category etc.
    let sql_condition = ''; // or/and
    let sql_query = '';

    if (typeof search_for !== 'undefined' && search_for !== null) {

        if (Array.isArray(search_for)) { // more than one selected option to find

            for (let i = 0; i < search_for.length; i++) {
                if (search_for[i] == "title") {
                    sql_condition += ` ${req.body.search_condition[i]} \`book\` LIKE "%${item[i]}%" `;
                }
                else if (search_for[i] == "author") {
                    sql_condition += ` ${req.body.search_condition[i]} \`authors\`.\`name\` LIKE "%${item[i]}%" OR \`authors\`.\`surname\` LIKE "%${item[i]}%" `;
                }
                else {
                    sql_condition += ` ${req.body.search_condition[i]} \`${search_for[i]}\` LIKE "%${item[i]}%" `;
                }
                // sql_condition += ` ${req.body.search_condition[i]} ${search_for[i]} LIKE "%${item[i]}%" `;
                console.log(sql_condition)
            }

        } else {
            if (search_for == `title`) {
                sql_condition += `\`book\` LIKE "%${item}%" `;
            } else if (search_for == "author") {
                sql_condition += `  \`authors\`.\`name\` LIKE "%${item}%" OR \`authors\`.\`surname\` LIKE "%${item}%" `;
            }
            else {
                sql_condition = `\`${search_for}\` LIKE "%${item}%"`
            }
        }

        sql_query = `
                    SELECT *
                    FROM \`books\` 
                    JOIN \`authors\` ON \`authors\`.\`idAuthor\` = \`books\`.\`idAuthor\`
                    WHERE ${sql_condition};`


        console.log(sql_query);

        db.sequelize.query(sql_query)
            .then(result => {

                if (typeof result !== 'undefined' && result !== null) {
                    if (result.length > 0) {
                        if (typeof result[0] !== 'undefined' && result[0] !== null && result[0].length !== 0) {
                            console.log(JSON.stringify("\nRESULT********************", null, 2));
                            console.log(JSON.stringify(result, null, 2));

                            let arrayOfIds = []

                            result[0].forEach(el => {
                                console.log(el)
                                arrayOfIds.push(el.idBook)
                            });

                            console.log(arrayOfIds);

                            db.book.findAll({
                                where: { idBook: arrayOfIds },

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
                                        res.redirect(`/no_results/${req.body.find_item}`);
                                    } else {
                                        console.log(JSON.stringify(result, null, 2));
                                        res.render(`results`, { booksArr: result, what: item, user: req.user })
                                    }
                                })
                                .catch(error => {
                                    console.log(error);
                                    res.status(400).send(error);
                                });
                        } else {
                            console.log("\nBrak wyników...");
                            res.redirect(`/no_results/${req.body.find_item}`);
                        }
                    }
                } else {
                    console.log("\nBrak wyników...");
                    res.redirect(`/no_results/${req.body.find_item}`);
                }

            })


    } else {

        // **************************************** SIMPLE SEARCH

        item = `%${req.body.find_item}%`

        db.book.findAll({

            where: {
                [Op.or]: [
                    { book: { [Op.like]: item } },
                    { originalTitle: { [Op.like]: item } },
                    { category: { [Op.like]: item } }
                ]
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

            // TODO: find where author.name like %item% or author.surname like %item% or series name like %item%

        })
            .then(result => {

                if (typeof result !== 'undefined' && result !== null) {
                    if (result.length > 0) {
                        console.log(JSON.stringify(result, null, 2));
                        res.render(`results`, { booksArr: result, what: req.body.find_item, user: req.user })
                    } else {
                        console.log("\nBrak wyników...");
                        res.redirect(`/no_results/${req.body.find_item}`);
                    }
                } else {
                    console.log("\nBrak wyników...");
                    res.redirect(`/no_results/${req.body.find_item}`);
                }
            })
            .catch(err => {
                console.log(err);
                res.status(400).send(err);
            });
    }

});


router.get('/', function (req, res, next) {

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
                res.render('index', { booksArr: result, user: req.user })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(400).send(error);
        });

});

module.exports = router;