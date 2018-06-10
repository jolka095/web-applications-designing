const Sequelize = require('sequelize');
const Category = require('./category');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Book = sequelize.define('books', {
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
    }, {
        // Timestamps
        timestamps: false,
        tableName: "books"
    });
    return Book;
}

// Book.belongsTo(Category, { foreignKey: "categoryId"})
