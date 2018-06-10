const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const BookSeries = sequelize.define('book_series', {
        idbook_series: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        vol_in_series: {
            type: Sequelize.INTEGER,
            allowNull: false
        }
    }, {
            tableName: "book_series"
        });

    return BookSeries;
}