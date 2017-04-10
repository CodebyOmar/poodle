var mongoose = require('mongoose')
    ,Schema  = mongoose.Schema;

var daySchema = new Schema({
    name: {type:String, required:true},
    dayOfWeek: {type:Number, required:true}
});

module.exports = mongoose.model('Day', daySchema);