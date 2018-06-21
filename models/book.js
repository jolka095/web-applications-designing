const Sequelize = require('sequelize');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('books', {
        idBook: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false
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
    },
        {
            tableName: "books"
        }
    )
    return Book;
}

// Relations are defined in db.js file that is why
// there's no need to add here idAuthor column 
// because Sequelize adds it automatically

// Relations in db.js
// db.author.hasMany(db.book, { foreignKey: 'idAuthor' });      // field 'idAuthor' in Book model reffers to Author model
// db.book.belongsTo(db.author, { foreignKey: 'idAuthor' });    // 'idAuthor' attribute automatically added to Book model