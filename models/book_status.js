const Sequelize = require('sequelize');
const db = require('../db');
const Book = require('./book')
const User = require('./user')
const Status = require('./status')

const BookStatus = db.define('book_status', {
    idbook_status: {
        type: Sequelize.INTEGER,
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
        name: "bookStatusId"
    },
    idbooks: {
        type: Sequelize.INTEGER,
        references: {
            model: Book,
            key: 'bookId',
        }
    },
    idusers: {
        type: Sequelize.INTEGER,
        references: {
            model: User,
            key: 'userId',
        }
    },
    idstatus: {
        type: Sequelize.INTEGER,
        references: {
            model: Status,
            key: 'statusId',
        }
    },
    page_number: {
        type: Sequelize.INTEGER
    },
    last_used: {
        type: Sequelize.DATE
    }
}, {
    tableName: "book_status"
})

module.exports = BookStatus