const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Mark = sequelize.define('marks', {
        idmarks: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false
        },
        value: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        }
    }, {
            tableName: "marks"
        });

    return Mark;
}