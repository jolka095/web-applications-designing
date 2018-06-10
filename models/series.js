const Sequelize = require('sequelize');
const Author = require('./author');

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
        idseries: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
            name: "seriesId"
        },
        series_name: {
            type: Sequelize.STRING,
            allowNull: false,
            name: "seriesName"
        },
        idauthors: {
            type: Sequelize.INTEGER,
            references: {
                model: Author,
                key: 'authorId',
            }
        },
        how_many_in_series: {
            type: Sequelize.INTEGER,
            name: "bookAmountInSeries"
        }
    }, {
        timestamps: false,
        tableName: "series"
    });

    return Series;
}