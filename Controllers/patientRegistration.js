const patient = require('../Model/patientModel');

module.exports.registration = function(req, res){
    patient.findOne({phoneNumber:req.body.phoneNumber})
    .then(function(user){
            if(user){
                return res.json(200, {
                            message : 'registration already completed'
                        })
            }

            patient.create({
                name : req.body.name,
                phoneNumber : req.body.phoneNumber,
                doctor : req.user.id
            })
            .then(function(user){
                return res.json(200, {
                    userData : user,
                    message : `Patient ${user.name} registration completed`
                })
            })
            .catch(function(error){
                return res.status(400).send({error:error});
            }) 
    })
    .catch(function(error){
        return res.status(400).send({error:error});
    }) 
}