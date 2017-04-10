var userRoutes = require('./user')
    ,jobRoutes = require('./job');

var routes = {
    user: userRoutes,
    job: jobRoutes
};

module.exports = routes;
