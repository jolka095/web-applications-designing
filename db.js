const Sequelize = require('sequelize');

const sequelize = new Sequelize({
    database: 'virtual_library',
    username: 'root',
    port: 3306,
    password: '',
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

module.exports = sequelize;


// Connect all the models/tables in the database to a db object,
//so everything is accessible via one object
const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

//Models/tables
db.author = require('./models/author')(sequelize, Sequelize);
db.book = require('./models/book')(sequelize, Sequelize);
db.book_marks = require('./models/book_marks')(sequelize, Sequelize);
db.book_series = require('./models/book_series')(sequelize, Sequelize);
db.book_status = require('./models/book_status')(sequelize, Sequelize);
db.category = require('./models/category')(sequelize, Sequelize);
db.mark = require('./models/mark')(sequelize, Sequelize);
db.series = require('./models/series')(sequelize, Sequelize);
db.status = require('./models/status')(sequelize, Sequelize);
db.user = require('./models/user')(sequelize, Sequelize);

//Relations
db.author.hasMany(db.book, { foreignKey: 'idauthors' }); // field 'idauthors' in Book model reffers to Author model
db.author.hasMany(db.series, { foreignKey: 'idauthors' });
db.book.belongsTo(db.author, { foreignKey: 'idauthors' }); //  'idauthors' attribute added to Book model
db.series.belongsTo(db.author, { foreignKey: 'idauthors' });

db.book.hasMany(db.book_marks, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_series, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_status, { foreignKey: 'idbooks' });
db.book_marks.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_series.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_status.belongsTo(db.book, { foreignKey: 'idbooks' });

db.category.hasMany(db.book, { foreignKey: 'idcategories' });
db.book.belongsTo(db.category, { foreignKey: 'idcategories' });

db.mark.hasMany(db.book_marks, { foreignKey: 'idmarks' });
db.book_marks.belongsTo(db.mark, { foreignKey: 'idmarks' });

db.series.hasMany(db.book_series, { foreignKey: 'idseries' });
db.book_series.belongsTo(db.series, { foreignKey: 'idseries' });

db.status.hasMany(db.book_status, { foreignKey: 'idstatus' });
db.book_status.belongsTo(db.status, { foreignKey: 'idstatus' });

db.user.hasMany(db.book_status, { foreignKey: 'idusers' });
db.user.hasMany(db.book_marks, { foreignKey: 'idusers' });
db.book_status.belongsTo(db.user, { foreignKey: 'idusers' });
db.book_marks.belongsTo(db.user, { foreignKey: 'idusers' });


module.exports = db;




// old versions

// const mysql = require('mysql');

// const connection = mysql.createConnection({
//   host: 'localhost',
//   user: 'root',
//   password: "admin", // set "" if you don't have password
//   database: "virtual_library"
// });

// connection.connect(function (err) {
//   if (!err) {
//     console.log("Database is connected\n\n");
//   } else {
//     console.log("Error connecting database\n\n");
//   }
// });


// settings for Sequelize

// const Sequelize = require('sequelize');
// const sequelize = new Sequelize(
//     "virtual_library",
//     'root',
//     'admin',
//     {
//         host: 'localhost',
//         dialect: 'mysql',
//         // disable logging; default: console.log
//         logging: false,
//         operatorsAliases: false,
//         define:
//             {
//                 timestamps: false
//             },
//         pool: {
//             max: 5,
//             min: 0,
//             acquire: 30000,
//             idle: 10000
//         }
//     })

// sequelize
//     .authenticate()
//     .then(() => {
//         console.log('Connection has been established successfully.')
//     })
//     .catch(err => {
//         console.error('Unable to connect to the database:', err)
//     })



// module.exports = sequelize;