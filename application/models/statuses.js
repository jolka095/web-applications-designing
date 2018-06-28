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
            allowNull: false
        },

        // idBook automatically is generated 
        // idUser automatically is generated 
        // see: db.js -> relations definitions

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
    },
        {
            tableName: "statuses"
        }
    )

    return Statuses;
}