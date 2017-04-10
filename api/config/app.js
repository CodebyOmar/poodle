/**
 * App config
 */
var app = {
    'env' : 'development',
    'port': process.env.PORT || 8077,
    mongodb: "mongodb://localhost:27017/poodle_db"
};

var config = {
    app: app
}

module.exports = config;