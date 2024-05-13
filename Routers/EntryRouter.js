const express = require('express');
const passport = require('passport');
const Router = express.Router();

Router.get('/', passport.authenticate('jwt', {session : false}) ,function(req,res){
    console.log(req.user);
    res.status(200).send({name: "Tejas Aher", message : "The server is ok"});
})

Router.use('/doctors', require('./DoctorRouter'));

Router.use('/patients', require('./patientRouter'));

Router.use('/reports', require('./ReportStatus'));


module.exports = Router;