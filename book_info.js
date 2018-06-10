const Sequelize = require('sequelize');
const BookAuthorCategory = require('./book_author_category');
const BookSeriesView = require('./book_series_view');
const BookTotalMarksAvgMark = require('./book_totalmarks_avgmark')

module.exports = (sequelize, DataTypes) => {
    const BookInfo = sequelize.define('book_info', {
        idbooks: {
            type: Sequelize.INTEGER,
            references: {
                model: BookAuthorCategory,
                key: 'booksId',
            }
        },
        title: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'bookTitle',
            }
        },
        publish_date: {
            type: Sequelize.DATE,
            references: {
                model: BookAuthorCategory,
                key: 'BookDate',
            }
        },
        ID_NUMBER: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksIdNumber',
            }
        },
        publisher: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksAuthor',
            }
        },
        synopsis: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksSynopsis',
            }
        },
        image: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksImage',
            }
        },
        text: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksText',
            }
        },
        original_title: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksOriginalTitle,
            }
        },
        language: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'booksLanguage',
            }
        },
        name: {
            type: Sequelize.INTEGER,
            references: {
                model: BookAuthorCategory,
                key: 'authorId',
            }
        },
        idauthors: {
            type: Sequelize.INTEGER,
            references: {
                model: BookAuthorCategory,
                key: 'authorId',
            }
        },
        series_name: {
            type: Sequelize.STRING,
            references: {
                model: BookSeriesView,
                key: 'seriesName',
            }
        },
        idseries: {
            type: Sequelize.INTEGER,
            references: {
                model: BookSeriesView,
                key: 'seriesId',
            }
        },
        idcategories: {
            type: Sequelize.INTEGER,
            references: {
                model: BookAuthorCategory,
                key: 'categoryId',
            }
        },
        name: {
            type: Sequelize.STRING,
            references: {
                model: BookAuthorCategory,
                key: 'categoryId',
            }
        },
        idbooks: {
            type: Sequelize.INTEGER,
            references: {
                model: BookTotalMarksAvgMark,
                key: 'booksId',
            }
        },
        value:{
            type: Sequelize.INTEGER,
            references: {
                model: BookTotalMarksAvgMark,
                key: 'value',
            }
        },
        how_many_in_series: {
            type: Sequelize.INTEGER,
            references: {
                model: BookSeriesView,
                key: 'bookAmountInSeries',
            }
        },
        vol_in_series:{
            type: Sequelize.INTEGER,
            model: BookSeriesView,
            key: 'volume'
        }
    }, {
        // Timestamps
        timestamps: false,
        tableName: "books"
    });
    return BookInfo;
}