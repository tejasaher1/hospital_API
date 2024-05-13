const doctorDetails = require('../Model/DoctorModel');
const jwt = require('jsonwebtoken');

module.exports.drRegistration = function(req, res){
    console.log('Doc details',req.body);
    doctorDetails.findOne({email:req.body.email})
    .then(function(user){
            if(user){
                return res.json(200, {
                            message : 'Account already created, Please do login'
                        })
            }

            doctorDetails.create(req.body)
            .then(function(user){
                return res.json(200, {
                    userData : user,
                    message : 'Doctor registration completed'
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


module.exports.signIn = function(req, res){
    doctorDetails.findOne({email : req.body.email})
    .then(function(user){
            if(user && req.body.password == user.password){
                return res.json(200, {
                    message: `User successfully Loggin, Welcome Doctor ${user.doctorname}`,
                    data : {
                        token : jwt.sign(user.toJSON(), 'secret', { expiresIn: '1hr'})
                    } 
                })
            }else{
                return res.json(404, {
                    message: 'User Not Found', 
                })
            }
            
    })
    .catch(function(error){
        console.log(error);
        return res.status(400).send({error:error});
    })
}