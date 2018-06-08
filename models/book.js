const Sequelize = require('sequelize');
const db = require('../db');
const Category = require('./category')
const Author = require('./author')

const Book = db.define('book', {
    idbooks: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        name: "bookId"
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
    },

    idcategories: {
        type: Sequelize.INTEGER,
        references: {
            model: Category,
            key: 'categoryId',
        }
    },
    idauthors: {
        type: Sequelize.INTEGER,
        references: {
            model: Author,
            key: 'authorId',
        }
    }
})

// Book.belongsTo(Category, { foreignKey: "categoryId"})

module.exports = Book