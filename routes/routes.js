const TestController = require('../app/controllers/TestController');

// routes
function Routes(app) {

    // import the controllers

    // test connection
    app.get('/test', TestController.testConnection);

    // select all tables
    app.get('/test/tables', TestController.selectAllTables);

    // select all columns
    app.get('/test/columns/:table', TestController.selectAllColumns);

    // select all tables and columns
    app.get('/test/tables-and-columns', TestController.selectAllTablesAndColumns);

    
}

// export routes
module.exports = Routes;
