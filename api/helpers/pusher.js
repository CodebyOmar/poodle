var Pusher     = require('pusher')
    ,escapeHTML = require('escape-html')
    ,config     = require('../config/services');

var PUSHER_APP_ID = config.pusher.app_id
    ,PUSHER_APP_KEY = config.pusher.key
    ,PUSHER_APP_SECRET = config.pusher.secret;

//new pusher
var pusher = new Pusher({
    appId: PUSHER_APP_ID,
    key: PUSHER_APP_KEY,
    secret: PUSHER_APP_SECRET,
    encrypted: true
});

/**
 * 
 * @param {*} message 
 */
var sendNotification = function(message){
    //trigger notification
    pusher.trigger('notifications', 'new_notification', {
        message: message
    });
    return true;
};

var Exports = {
    sendNotification: sendNotification
};
module.exports = Exports;