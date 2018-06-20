const Sequelize = require('sequelize');
const Book = require('./book');
const Series = require('./series');

module.exports = (sequelize, DataTypes) => {
    const BookSeries = sequelize.define('bookseries', {
        idBookSeries: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "bookSeriesId"
        },
        idBook: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,

            references: {
                model: Book,
                key: 'bookId',
            }
        },
        idSeries: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,

            references: {
                model: Series,
                key: 'seriesId',
            }
        },
        booksNumber: {
            type: Sequelize.INTEGER(2).UNSIGNED,
            allowNull: false
        }
    }, {
        tableName: "bookseries"
    });

    return BookSeries;
}