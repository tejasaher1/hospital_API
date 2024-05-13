const mongoose = require('mongoose');

const StatusEnum = Object.freeze({
    'Negative': 'Negative',
    'Travelled-Quarantine': 'Travelled-Quarantine',
    'Symptoms-Quarantine': 'Symptoms-Quarantine',
    'Positive-Admit': 'Positive-Admit'
  });

const ReportSchema = mongoose.Schema({
    status: {
        type: String,
        enum: Object.values(StatusEnum), // Specify the enum values
        required: true
    },

    patient : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Patient'
    },

    doctor : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'doctorDetails'
    }
},{
    timestamps : true
})



const Report = mongoose.model('Report', ReportSchema);

module.exports = Report;