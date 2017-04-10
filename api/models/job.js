var mongoose = require('mongoose')
    ,Schema  = mongoose.Schema;

var JobSchema = new Schema({
    title: {type:String, required:true},
    time: {type:String, required:true},
    day: {
        type:mongoose.Schema.Types.ObjectId,
        ref: "Day"
    },
    for: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    }
});

module.exports = mongoose.model('Job', JobSchema);