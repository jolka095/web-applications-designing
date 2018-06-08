const Sequelize = require('sequelize');
const db = require('../db');

const Mark = db.define('mark', {
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
})

module.exports = Mark