const Report = require('../Model/patientReport');

module.exports.createReport = function(req, res){
    const patientId = req.params.id;
    console.log(patientId);
    Report.create({
        status : req.body.status,
        patient : patientId,
        doctor : req.user.id
    })
    .then(function(report){
        return res.json(200, {
            Report : report,
            message : 'Report generation completed'
        })
    })
    .catch(function(error){
        return res.status(400).send({error:error});
    }) 

}

module.exports.patientReport = function(req,res){
    const patientId = req.params.id;
    Report.find({patient : patientId})
    .then(function(data){
        console.log(data[0]);
        return res.json(200, {
            data : data,
            message : 'All report'
        })
    })
    .catch(function(error){
        return res.status(400).send({error:error});
    }) 
}


module.exports.allPatientReport = function(req,res){
    const status = req.params.status;
    Report.find({status : status})
    .then(function(data){
        console.log(data);
        return res.json(200, {
            data : data,
            message : `All patient ${data[0].status} report`
        })
    })
    .catch(function(error){
        return res.status(400).send({error:error});
    }) 
}