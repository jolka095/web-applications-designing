const Sequelize = require('sequelize');
const Book = require('./book');
const User = require('./user');

module.exports = (sequelize, DataTypes) => {
    const Mark = sequelize.define('marks', {
        idMark: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "markId"
        },

        idBook: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,

            references: {
                model: Book,
                key: 'bookId',
            }
        },
        idUser: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,

            references: {
                model: User,
                key: 'userId',
            }
        },

        mark: {
            type: Sequelize.INTEGER(1).UNSIGNED,
            allowNull: false
        },
        markDate: {
            type: Sequelize.DATE,
            allowNull: true
        }
    }, {
        tableName: "marks"
    });

    return Mark;
}