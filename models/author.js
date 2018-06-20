const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('authors', {
        idAuthor: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "authorId"
        },
        about: {
            type: Sequelize.STRING,
            allowNull: true
        },
        authorDate: {
            type: Sequelize.DATE,
            allowNull: true
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
            tableName: "authors"
    });

    return Author;
}