const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const BookMarks = sequelize.define('book_marks', {
        idbook_marks: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        date: {
            type: Sequelize.DATE
        },

    }, {
            tableName: "book_marks"
        });

    return BookMarks;
}