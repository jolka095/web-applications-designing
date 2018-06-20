const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('users', {
        idUser: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "userId"
        },
        email: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        login: {
            type: Sequelize.STRING,
            unique: true,
            allowNull: false
        },
        name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        surname: {
            type: Sequelize.STRING,
            allowNull: false
        },
        password: {
            type: Sequelize.STRING,
            allowNull: false
        }
    }, {
        tableName: "users"
    });

    return User;
}