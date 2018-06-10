const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Status = sequelize.define('status', {
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
        timestamps: false,
        tableName: "status"
    });

    return Status;
}