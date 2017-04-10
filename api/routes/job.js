var express    = require('express')
    ,router    = express.Router()
    ,models    = require('../models/index')
    ,jobScheduler = require('../helpers/scheduler')
    ,pusha    = require('../helpers/pusher');

//models
var Job = models.job;
var Day = models.day;
var User = models.user;

router.use(function(req, res, next){
    console.log('routing to jobs..');
    next();
});

router.route('/create')
    .post(function(req, res){
        var job = new Job(), day = new Day();

        job.time = req.body.time;
        job.for = "58df011f3d27961074c0d5e1";//user.id(to be inside token when auth is implemented)
        job.day = day._id;
        job.title = req.body.title;
        
        //retrive dayOfWeek
        var getDay = day.findById({_id:job.day});
        var dayOfWeek = getDay.dayOfWeek;

        //save job
        job.save(function(err){
            if(err)
            {
                res.json({
                    status: 'error',
                    code: 500,
                    data: null,
                    message: 'Job could not be saved'
                });
            }else{

            //schedule created job
            var schedule = jobScheduler.schedule(dayOfWeek, req.body.time, req.body.title, job.for);
            
            if(schedule == true){
                
                res.json({
                status: 'success',
                data: 'Job has been scheduled!'
                });
            }else{
                res.json({
                status: 'error',
                message: 'Oops! Job could not be scheduled!',
                data: null,
                code: 500
                });
            }
            }
        });

    });
module.exports = router;