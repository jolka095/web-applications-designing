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
db.book_author_category = require('./models/book_author_category')(sequelize, Sequelize);
db.book_info = require('./models/book_info')(sequelize, Sequelize);
db.book_marks = require('./models/book_marks')(sequelize, Sequelize);
db.book_series = require('./models/book_series')(sequelize, Sequelize);
db.book_series_view = require('./models/book_series_view')(sequelize, Sequelize);
db.book_status = require('./models/book_status')(sequelize, Sequelize);
db.book_totalmarks_avgmark = require('./models/book_totalmarks_avgmark')(sequelize, Sequelize);
db.category = require('./models/category')(sequelize, Sequelize);
db.mark = require('./models/mark')(sequelize, Sequelize);
db.series = require('./models/series')(sequelize, Sequelize);
db.status = require('./models/status')(sequelize, Sequelize);
db.user = require('./models/user')(sequelize, Sequelize);

//Relations
db.author.hasMany(db.book, { foreignKey: 'idauthors' }); // field 'idauthors' in Book model reffers to Author model
db.author.hasMany(db.book_author_category, { foreignKey: 'idauthors' });
db.author.hasMany(db.book_author_category, { foreignKey: 'name' });
db.author.hasMany(db.series, { foreignKey: 'idauthors' });
db.book.belongsTo(db.author, { foreignKey: 'idauthors' }); //  'idauthors' attribute added to Book model
db.book_author_category.belongsTo(db.author, { foreignKey: 'idauthors' });
db.book_author_category.belongsTo(db.author, { foreignKey: 'name' });
db.series.belongsTo(db.author, { foreignKey: 'idauthors' });

db.book.hasMany(db.book_author_category, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_author_category, { foreignKey: 'title' });
db.book.hasMany(db.book_author_category, { foreignKey: 'publish_date' });
db.book.hasMany(db.book_author_category, { foreignKey: 'ID_NUMBER' });
db.book.hasMany(db.book_author_category, { foreignKey: 'publisher' });
db.book.hasMany(db.book_author_category, { foreignKey: 'synopsis' });
db.book.hasMany(db.book_author_category, { foreignKey: 'image' });
db.book.hasMany(db.book_author_category, { foreignKey: 'text' });
db.book.hasMany(db.book_author_category, { foreignKey: 'original_title' });
db.book.hasMany(db.book_author_category, { foreignKey: 'language' });
db.book.hasMany(db.book_marks, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_series, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_series_view, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_status, { foreignKey: 'idbooks' });
db.book.hasMany(db.book_totalmarks_avgmark, { foreignKey: 'idbooks' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'title' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'publish_date' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'ID_NUMBER' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'publisher' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'synopsis' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'text' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'original_title' });
db.book_author_category.belongsTo(db.book, { foreignKey: 'language' });
db.book_marks.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_series.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_series_view.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_status.belongsTo(db.book, { foreignKey: 'idbooks' });
db.book_totalmarks_avgmark.belongsTo(db.book, { foreignKey: 'idbooks' });


db.book_author_category.hasMany(db.book_info, { foreignKey: 'idbooks' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'title' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'publish_date' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'ID_NUMBER' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'publisher' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'synopsis' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'image' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'text' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'original_title' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'language' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'idauthors' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'name' });
db.book_author_category.hasMany(db.book_info, { foreignKey: 'idcategories' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'idbooks' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'title' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'publish_date' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'ID_NUMBER' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'publisher' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'synopsis' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'text' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'original_title' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'language' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'idauthors' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'name' });
db.book_info.belongsTo(db.book_author_category, { foreignKey: 'idcategories' });


db.book_series.hasMany(db.book_series_view, { foreignKey: 'vol_in_series' });
db.book_series_view.belongsTo(db.book_series, { foreignKey: 'vol_in_series' });


db.book_series_view.hasMany(db.book_info, { foreignKey: 'series_name' });
db.book_series_view.hasMany(db.book_info, { foreignKey: 'idseries' });
db.book_series_view.hasMany(db.book_info, { foreignKey: 'how_many_in_series' });
db.book_series_view.hasMany(db.book_info, { foreignKey: 'vol_in_series' });
db.book_info.belongsTo(db.book_series, { foreignKey: 'series_name' });
db.book_info.belongsTo(db.book_series, { foreignKey: 'idseries' });
db.book_info.belongsTo(db.book_series, { foreignKey: 'how_many_in_series' });
db.book_info.belongsTo(db.book_series, { foreignKey: 'vol_in_series' });


db.book_totalmarks_avgmark.hasMany(db.book_info, { foreignKey: 'idbooks' });
db.book_info.belongsTo(db.book_totalmarks_avgmark, { foreignKey: 'value' });


db.category.hasMany(db.book, { foreignKey: 'idcategories' });
db.category.hasMany(db.book_author_category, { foreignKey: 'idcategories' });
db.book.belongsTo(db.category, { foreignKey: 'idcategories' });
db.book_author_category.belongsTo(db.category, { foreignKey: 'idcategories' });

db.mark.hasMany(db.book_marks, { foreignKey: 'idmarks' });
db.mark.hasMany(db.book_totalmarks_avgmark, { foreignKey: 'value' });
db.book_marks.belongsTo(db.mark, { foreignKey: 'idmarks' });
db.book_totalmarks_avgmark.belongsTo(db.mark, { foreignKey: 'value' });

db.series.hasMany(db.book_series, { foreignKey: 'idseries' });
db.series.hasMany(db.book_series_view, { foreignKey: 'idseries' });
db.series.hasMany(db.book_series_view, { foreignKey: 'series_name' });
db.series.hasMany(db.book_series_view, { foreignKey: 'how_many_in_series' });
db.book_series.belongsTo(db.series, { foreignKey: 'idseries' });
db.book_series_view.belongsTo(db.series, { foreignKey: 'idseries' });
db.book_series_view.belongsTo(db.series, { foreignKey: 'series_name' });
db.book_series_view.belongsTo(db.series, { foreignKey: 'how_many_in_series' });

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