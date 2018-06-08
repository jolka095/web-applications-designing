const Sequelize = require('sequelize');
const db = require('../db');
const Book = require('./book')

const Category = db.define('category', {
    idcategories: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
        name: "categoryId"
    },
    name: {
        type: Sequelize.STRING,
        defaultValue: null
    }
})

// Category.associate = function (models) {
    // Category.hasMany(Book, { as: "category", foreignKey: "categoryId"})
// }

module.exports = Category