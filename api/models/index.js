var dayModel   = require('./day')
    ,jobModel  = require('./job')
    ,userModel = require('./user');


var models = {
    day: dayModel,
    job: jobModel,
    user: userModel
};

module.exports = models;
