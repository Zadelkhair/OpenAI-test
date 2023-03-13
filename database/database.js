const mysql = require("mysql");

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

class Database {
  // test connection
  testConnection() {
    return new Promise((resolve, reject) => {
      try {
        connection.connect(function (err) {
          if (err) throw err;
          resolve("Connected!");
        });
      } catch (error) {
        reject(error);
      }
    });
  }

  // open connection
  openConnection() {
    return new Promise((resolve, reject) => {
      try {
        connection.connect(function (err) {
          if (err) throw err;
          resolve("Connected!");
        });
      } catch (error) {
        connection.connect(function (err) {
          if (err) throw err;
          console.log("Connected!");
        });
      }
    });
  }

  // close connection
  closeConnection() {
    return new Promise(function (resolve, reject) {
      try {
        connection.end();
        resolve("Disconnected!");
      } catch (error) {
        reject(error);
      }
    });
  }

  // query ( select )
  querySelect(sql, args) {
    // return new promise
    return new Promise((resolve, reject) => {
      // open connection

      connection.query(sql, args, (err, rows) => {
        if (err) return reject(err);
        resolve(rows);
      });
      // close connection
    });
  }

  // query ( update, insert, remove)
  queryUpdate(sql, args) {
    // return new promise
    return new Promise((resolve, reject) => {
      // open connection

      connection.query(sql, args, (err, result) => {
        if (err) return reject(err);
        resolve(result);
      });
      // close connection
    });
  }
}

module.exports = Database;
