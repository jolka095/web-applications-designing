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
            allowNull: false
        },

        // idBook automatically is generated 
        // idUser automatically is generated 
        // see: db.js -> relations definitions

        mark: {
            type: Sequelize.INTEGER(1).UNSIGNED,
            allowNull: false
        },
        markDate: {
            type: Sequelize.DATE,
            allowNull: true
        }
    },
        {
            tableName: "marks"
        }
    )

    return Mark;
}