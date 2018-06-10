const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('books', {
        idbooks: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publish_date: {
            type: Sequelize.DATE,
            allowNull: false
        },
        add_date: {
            type: Sequelize.DATE
        },
        ID_NUMBER: {
            type: Sequelize.STRING,
            allowNull: false
        },
        publisher: {
            type: Sequelize.STRING
        },
        synopsis: {
            type: Sequelize.STRING,
            allowNull: false
        },
        image: {
            type: Sequelize.STRING,
            allowNull: false
        },
        text: {
            type: Sequelize.STRING
        },
        original_title: {
            type: Sequelize.STRING,
            allowNull: false
        },
        language: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: "books"
    });
    return Book;
}