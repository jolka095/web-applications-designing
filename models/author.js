const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('authors', {
        idauthors: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        last_name: {
            type: Sequelize.STRING,
            allowNull: false
        }
        }, {
            tableName: "authors"
    });

    return Author;
}