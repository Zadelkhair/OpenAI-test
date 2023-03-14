const TestController = require('../app/controllers/TestController');
const ComingSoonController = require('../app/controllers/ComingSoonController');

// routes
function Routes(app) {
    // test connection
    app.get('/test', TestController.testConnection);

    // select all tables
    app.get('/test/tables', TestController.selectAllTables);

    // select all columns
    app.get('/test/columns/:table', TestController.selectAllColumns);

    // select all tables and columns
    app.get('/test/tables-and-columns', TestController.selectAllTablesAndColumns);

    // comingsoon
    app.post('/comingsoon', ComingSoonController.comingSoon);
}

// export routes
module.exports = Routes;
