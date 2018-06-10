const Sequelize = require('sequelize');
const Book = require('./book');
const Series = require('./series');

module.exports = (sequelize, DataTypes) => {
    const BookSeries = sequelize.define('book_series', {
        idbook_series: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            name: "bookSeriesId"
        },
        idbooks: {
            type: Sequelize.INTEGER,

            references: {
                model: Book,
                key: 'bookId',
            }
        },
        idseries: {
            type: Sequelize.INTEGER,

            references: {
                model: Series,
                key: 'seriesId',
            }
        },
        vol_in_series: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "book_series"
    });

    return BookSeries;
}