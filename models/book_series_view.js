const Sequelize = require('sequelize');
const Book = require('./book');
const Series = require('./series');
const BookSeries = require('./book_series');

module.exports = (sequelize, DataTypes) => {
    const BookSeriesView = sequelize.define('book_series_view', {
        idbooks: {
            type: Sequelize.INTEGER,
            references: {
                model: Book,
                key: 'booksId',
            }
        },


        idseries: {
            type: Sequelize.INTEGER,
            references: {
                model: Series,
                key: 'seriesId',
            }
        },
        series_name: {
            type: Sequelize.STRING,
            references: {
                model: Series,
                key: 'seriesName',
            }
        },
        how_many_in_series: {
            type: Sequelize.INTEGER,
            references: {
                model: Series,
                key: 'bookAmountInSeries',
            }
        },


        vol_in_series:{
            type: Sequelize.INTEGER,
            model: BookSeries,
            key: 'volume'
        }
    }, {
        tableName: "book_series_view"
    });

    return BookSeriesView;
}