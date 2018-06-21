const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Author = sequelize.define('authors', {
        idAuthor: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
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
    },
        {
            tableName: "authors"
        }
    )

    return Author;
}