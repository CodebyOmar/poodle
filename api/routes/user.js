var express = require('express')
    ,router = express.Router()
    ,models = require('../models/index');

//models
var User = models.user;

router.use(function(req, res, next){
    console.log('routing..');
    next();
});


router.route('/create')
    .post(function(req, res){
        var user = new User();

        user.name = req.body.name;
        user.email = req.body.email;
        user.phone = req.body.phone;

        user.save(function(err){
            if(err)
            {
                res.json({
                    status: 'error',
                    data: null,
                    code: 500,
                    message: "User could not be created!"
                });
            }else{   
            
                res.json({
                    status: 'success',
                    data: 'User created successfully!'
                });
            }
        });  
    });
    

module.exports = router;