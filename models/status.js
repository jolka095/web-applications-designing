const Sequelize = require('sequelize');
const db = require('../db');

const Status = db.define('status', {
    idstatus: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        name: "statusId" // needed?

    },
    status: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    }
}, {
    tableName: "status"
})

module.exports = Status