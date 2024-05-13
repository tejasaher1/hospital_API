const mongoose = require('mongoose');

const doctorSchema = mongoose.Schema({
    doctorname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    }
}, {
    timestamps: true 
});

const doctorDetails = mongoose.model('doctorDetail', doctorSchema);

module.exports = doctorDetails;