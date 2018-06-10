const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Category = sequelize.define('categories', {
        idcategories: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            defaultValue: null
        }
    }, {
            tableName: "categories"
        });

    return Category;
}