const mongoose = require('mongoose')
const employeeSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    efname : {type:String,require:true},
    elname : {type:String,require:true},
    position : {type:String,require:true},
});
module.exports = mongoose.model('Employee',employeeSchema);