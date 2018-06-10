const Sequelize = require('sequelize');
const Book = require('./book');
const Mark = require('./mark');


module.exports = (sequelize, DataTypes) => {
    const BookTotalMarksAvgMark = sequelize.define('book_totalmarks_avgmark', {
        idbooks: {
            type: Sequelize.INTEGER,
            references: {
                model: Book,
                key: 'booksId',
            }
        },
        value:{
            type: Sequelize.INTEGER,
            references: {
                model: Mark,
                key: 'value',
            }
        }
    }, {
        tableName: "book_totalmarks_avgmark"
    });

    return BookTotalMarksAvgMark;
}