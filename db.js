const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'virtual_library',
    username: 'root',
    port: 3306,
    ip: "172.18.0.1",
    password: 'admin',
    // disable logging; default: console.log
    logging: false,
    operatorsAliases: false,
    define:
        {
            timestamps: false
        },
    dialect: 'mysql'
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

//module.exports = sequelize;


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.author = require('./models/author')(sequelize, Sequelize);
db.book = require('./models/book')(sequelize, Sequelize);
db.bookSeries = require('./models/bookSeries')(sequelize, Sequelize);
db.mark = require('./models/mark')(sequelize, Sequelize);
db.series = require('./models/series')(sequelize, Sequelize);
db.statuses = require('./models/statuses')(sequelize, Sequelize);
db.user = require('./models/user')(sequelize, Sequelize);

//Relations
db.author.hasMany(db.book, { foreignKey: 'idAuthor' }); // field 'idauthors' in Book model reffers to Author model
db.author.hasMany(db.series, { foreignKey: 'idAuthor' });
db.book.belongsTo(db.author, { foreignKey: 'idAuthor' }); //  'idauthors' attribute added to Book model
db.series.belongsTo(db.author, { foreignKey: 'idAuthor' });

db.book.hasMany(db.bookSeries, { foreignKey: 'idBook' });
db.book.hasMany(db.mark, { foreignKey: 'idBook' });
db.book.hasMany(db.statuses, { foreignKey: 'idBook' });
db.bookSeries.belongsTo(db.book, { foreignKey: 'idBook' });
db.mark.belongsTo(db.book, { foreignKey: 'idBook' });
db.statuses.belongsTo(db.book, { foreignKey: 'idBook' });

db.series.hasMany(db.bookSeries, { foreignKey: 'idSeries' });
db.bookSeries.belongsTo(db.series, { foreignKey: 'idSeries' });

db.user.hasMany(db.mark, { foreignKey: 'idUser' });
db.user.hasMany(db.statuses, { foreignKey: 'idUser' });
db.mark.belongsTo(db.user, { foreignKey: 'idUser' });
db.statuses.belongsTo(db.user, { foreignKey: 'idUser' });


module.exports = db;