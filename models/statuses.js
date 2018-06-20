const Sequelize = require('sequelize');
const Book = require('./book');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
    const Statuses = sequelize.define('statuses', {
        idStat: {
            type: Sequelize.INTEGER(11).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "statusId" // needed?

        },

        idBook: {
            type: Sequelize.INTEGER(11).UNSIGNED,
            allowNull: false,

            references: {
                model: Book,
                key: 'bookId',
            }
        },
        idUser: {
            type: Sequelize.INTEGER(11).UNSIGNED,
            allowNull: false,
            references: {
                model: User,
                key: 'authorId',
            }
        },

        stat: {
            type: Sequelize.STRING,
            allowNull: false
        },
        pageNumber: {
            type: Sequelize.STRING,
            allowNull: true
        },
        lastUsed: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, {
        tableName: "statuses"
    });

    return Statuses;
}