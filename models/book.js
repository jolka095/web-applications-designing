const Sequelize = require('sequelize');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('books', {
        idBook: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "bookId"
        },

        idAuthor: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: Author,
                key: 'authorId',
            }
        },

        addDate: {
            type: Sequelize.DATE,
            allowNull: true
        },
        book: {
            type: Sequelize.STRING,
            allowNull: false
        },
        category: {
            type: Sequelize.STRING,
            allowNull: false
        },
        ID_NUMBER: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        lang: {
            type: Sequelize.STRING,
            allowNull: false
        },
        originalTitle: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publisher: {
            type: Sequelize.STRING,
            allowNull: true
        },
        releaseDate: {
            type: Sequelize.DATE,
            allowNull: false
        },
        synopsis: {
            type: Sequelize.TEXT,
            allowNull: false
        },
        text: {
            type: Sequelize.STRING,
            allowNull: true
        }
    }, {
        tableName: "books"
    });
    return Book;
}

// Book.belongsTo(Category, { foreignKey: "categoryId"})
