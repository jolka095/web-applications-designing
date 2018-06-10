const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Mark = sequelize.define('marks', {
        idmarks: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            allowNull: false,
            name: "markId"
        },
        value: {
            type: Sequelize.INTEGER,
            unique: true,
            allowNull: false
        }
    }, {
        timestamps: false,
        tableName: "marks"
    });

    return Mark;
}