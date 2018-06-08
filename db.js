const mysql = require('mysql');
const dbName = "virtual_library";

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: "admin", // set "" if you don't have password
  database: dbName
});

connection.connect(function (err) {
  if (!err) {
    console.log("Database is connected\n\n");
  } else {
    console.log("Error connecting database\n\n");
  }
});

module.exports = connection;