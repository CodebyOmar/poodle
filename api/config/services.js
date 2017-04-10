var pusher = {
    'env': 'development',
    app_id: process.env.PUSHER_APP_ID || "320806",
    key: process.env.PUSHER_APP_KEY || "9dddcf3ac6b11b8b5ec2",
    secret: process.env.PUSHER_APP_SECRET || "c833c2e5fd74860a3a2b"
};

var config = {
    pusher: pusher
};

module.exports = config;