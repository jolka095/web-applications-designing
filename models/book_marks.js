const Sequelize = require('sequelize');
const db = require('../db');
const Book = require('./book')
const Mark = require('./mark')
const User = require('./user')

const BookMarks = db.define('book_marks', {
    idbook_marks: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        name: "bookMarksId"
    },
    idbooks: {
        type: Sequelize.INTEGER,
        references: {
            model: Book,
            key: 'bookId',
        }
    },
    idmarks: {
        type: Sequelize.INTEGER,
        references: {
            model: Mark,
            key: 'markId',
        }
    },
    idusers: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'userId',
        }
    },
    date: {
        type: Sequelize.DATE
    },

}, {
    tableName: "book_marks"
})

module.exports = BookMarks