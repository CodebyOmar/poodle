var cron     = require('node-cron')
    ,pusher  = require('./pusher');

/**
 * schedules notifications
 * @param {*} day 
 * @param {*} time 
 * @param {*} title 
 * @param {*} user 
 */
var scheduler = (day, time, title, user) => {
    var time = time.split(':', 2);
    var hr = time[0], min = time[1];
    var rule = "0"+" "+min+" "+hr+" "+"* *"+" "+day;
    
    var job = cron.schedule(rule, function(){
        if(pusher.sendNotification(title) == true)
        {
            console.log("Notification sent");
        }else{
            console.log("Notification could not be triggered!");
        }
    });
    return true;
};

var Module = {
    schedule: scheduler
};

module.exports = Module;