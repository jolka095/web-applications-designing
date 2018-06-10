const Sequelize = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    const Series = sequelize.define('series', {
        idseries: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        series_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        how_many_in_series: {
            type: Sequelize.INTEGER,
            name: "bookAmountInSeries"
        }
    }, {
            tableName: "series"
        });

    return Series;
}