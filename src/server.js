/* const express = require("express");
const app = express();
const routerConfig = require('./routes/index.routes');

const configRouter = (app) => {
    app.use('/api/v1/', routerConfig.loggedInRoutes());
    app.use('/', routerConfig.authroutes());
};

configRouter(app);

module.exports = app; */