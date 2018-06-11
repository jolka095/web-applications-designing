const Sequelize = require('sequelize');
const Book = require('./book');
const Author = require('./author');
const Category = require('./category');

module.exports = (sequelize, DataTypes) => {
    const BookAuthorCategory = sequelize.define('book_author_category', {
        idbooks: {
            type: Sequelize.INTEGER,
            references: {
                model: Book,
                key: 'booksId',
            }
        },
        title: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'bookTitle',
            }
        },
        publish_date: {
            type: Sequelize.DATE,
            references: {
                model: Book,
                key: 'BookDate',
            }
        },
        ID_NUMBER: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksIdNumber',
            }
        },
        publisher: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksAuthor',
            }
        },
        synopsis: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksSynopsis',
            }
        },
        image: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksImage',
            }
        },
        text: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksText',
            }
        },
        original_title: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'originalTitle',
            }
        },
        language: {
            type: Sequelize.STRING,
            references: {
                model: Book,
                key: 'booksLanguage',
            }
        },


        idauthors: {
            type: Sequelize.INTEGER,
            references: {
                model: Author,
                key: 'authorId',
            }
        },
        name: {
            type: Sequelize.INTEGER,
            references: {
                model: Author,
                key: 'authorName',
            }
        },


        idcategories: {
            type: Sequelize.INTEGER,
            references: {
                model: Category,
                key: 'categoryId',
            }
        },
        name: {
            type: Sequelize.STRING,
            references: {
                model: Category,
                key: 'categoryName',
            }
        }

    }, {
        // Timestamps
        tableName: "book_author_category"
    });
    return BookAuthorCategory;
}