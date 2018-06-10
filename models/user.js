const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        idusers: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            name: "userId"
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        },
        username: {
            type: Sequelize.STRING,
            defaultValue: null
        },
        sex: {
            type: Sequelize.CHAR,
            defaultValue: null
        }
    }, {
        timestamps: false,
        tableName: "users"
    });

    return User;
}