var mongoose    = require('mongoose')
    ,bodyParser = require('body-parser')
    ,express    = require('express')
    ,models     = require('./api/models/index')
    ,routes     = require('./api/routes/index')
    ,app        = express()
    ,config     = require('./api/config/app')
    ,morgan     = require('morgan')
    ,path       = require('path');

app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

app.use(function(req, res, next){
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type, Authorization');
    next();
});

app.use(morgan('dev')); //log all request to console
mongoose.Promise = global.Promise;
mongoose.connect(config.app.mongodb); //connect to db

app.use(express.static(__dirname + '/public')); //static files location

/**
 * prefix API route
 */
app.use('/api/user', routes.user);
app.use('/api/job', routes.job);

app.get('*', function(req, res){
    res.sendFile(path.join(__dirname + '/public/app/views/index.html'));
});

app.listen(config.app.port);
console.log('Server running on port ' + config.app.port);

