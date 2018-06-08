const Sequelize = require('sequelize');
const db = require('../db');

const Author = db.define('author', {
    idauthors: {
        type: Sequelize.INTEGER, 
        primaryKey: true, 
        autoIncrement: true, 
        allowNull: false,
        name: "authorId"
    },
    name: {
        type: Sequelize.STRING, 
        allowNull: false
    },
    last_name: {
        type: Sequelize.STRING, 
        allowNull: false
    }
})

module.exports = Author