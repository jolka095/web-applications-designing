const Sequelize = require('sequelize');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
        idSeries: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false
        },

        // idAuthor automatically is generated 
        // see: db.js -> relations definitions

        series: {
            type: Sequelize.STRING,
            allowNull: false
        },
        volumesNumber: {
            type: Sequelize.INTEGER(2).UNSIGNED,
            allowNull: true
        }
    },
        {
            tableName: "series"
        }
    )

    return Series;
}