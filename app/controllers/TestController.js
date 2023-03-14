// import the database
const Database = require("../../database/database");
const database = new Database();
const responseBuilder = require("./responseBuilder");

class TestController {
  
  // static methods
  static async testConnection(req, res) {
    // test connection
    database
      .testConnection()
      .then((response) => {
        res.json(responseBuilder.success(response));
      })
      .catch((error) => {
        res.json(responseBuilder.error(error));
      });
  }

  // static methods select all tables from database
  static async selectAllTables(req, res) {
    // test connection
    database
      .querySelect("SHOW TABLES")
      .then((response) => {
        res.json(responseBuilder.success(response));
      })
      .catch((error) => {
        res.json(responseBuilder.error(error));
      });
  }

  // static methods select all columns from a table
  static async selectAllColumns(req, res) {
    // table is required
    if (!req.params.table) {
      res.json(responseBuilder.error("Table is required"));
      return;
    }

    // test connection
    database
      .querySelect(`DESCRIBE ${req.params.table}`)
      .then((response) => {
        res.json(
          responseBuilder.success({
            table: req.params.table,
            columns: response,
          })
        );
      })
      .catch((error) => {
        res.json(responseBuilder.error(error));
      });
  }

  // static method select all tables with their columns
  static async selectAllTablesAndColumns(req, res) {
    let tablesWithColumns = [];

    database
      .querySelect("SHOW TABLES")
      .then((response) => {
        // get all tables
        let tables = response.map((table) => {
          return {
            table: table[Object.keys(table)[0]],
            columns: [],
          };
        });

        try {
          // get all columns for each table
          let promises = tables.map((table) => {
            return database.querySelect(`DESCRIBE ${table.table}`);
          });

          // wait for all promises to be resolved
          Promise.all(promises)
            .then((responses) => {
              // add columns to tables
              responses.forEach((response, index) => {
                tables[index].columns = response;
              });
              res.json(responseBuilder.success(tables));
            })
            .catch((error) => {
              res.json(responseBuilder.error(error));
            });
        } catch (e) {
          res.json(responseBuilder.error(e));
        }

      })
      .catch((error) => {
        res.json(responseBuilder.error(error));
      });
  }

}

module.exports = TestController;
