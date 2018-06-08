const Sequelize = require('sequelize');
const db = require('../db');

const User = db.define('user', {
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
})

module.exports = User