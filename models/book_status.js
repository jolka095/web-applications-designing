const Sequelize = require('sequelize');
const Book = require('./book');
const User = require('./user');
const Status = require('./status');

module.exports = (sequelize, DataTypes) => {
    const BookStatus = sequelize.define('book_status', {
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
        timestamps: false,
        tableName: "book_status"
    });

    return BookStatus;
}