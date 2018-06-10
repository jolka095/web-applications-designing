const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const BookStatus = sequelize.define('book_status', {
        idbook_status: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        page_number: {
            type: Sequelize.INTEGER
        },
        last_used: {
            type: Sequelize.DATE
        }
    }, {
            tableName: "book_status"
        });

    return BookStatus;
}