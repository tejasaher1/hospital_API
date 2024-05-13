const mongoose = require('mongoose');

const PatientSchema = mongoose.Schema({
    name : {
        type : String,
        require : true   
    },
    phoneNumber : {
        type : String,
        require : true
    },
    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'doctorDetails'
    }
},{
        timestamps: true 
});

const Patient = mongoose.model('Patients', PatientSchema);

module.exports = Patient;