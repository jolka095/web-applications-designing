const Sequelize = require('sequelize');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
        idSeries: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            primaryKey: true,
            unique: true,
            autoIncrement: true,
            allowNull: false,
            name: "seriesId"
        },

        idAuthor: {
            type: Sequelize.INTEGER(10).UNSIGNED,
            allowNull: false,
            references: {
                model: Author,
                key: 'authorId',
            }
        },

        series: {
            type: Sequelize.STRING,
            allowNull: false,
            name: "seriesName"
        },
        volumesNumber: {
            type: Sequelize.INTEGER(2).UNSIGNED,
            allowNull: true,
            name: "seriesVolume"
        }
    }, {
        tableName: "series"
    });

    return Series;
}