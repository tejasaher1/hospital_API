const express = require('express');
const app = express();
const port = 8080;
const db = require('./config/mongoose')
const doctorDetails = require('./Model/DoctorModel');
const jwtAuthentication = require('./config/passport-jwt-strategy');

app.use(express.urlencoded());

app.use('/', require('./Routers/EntryRouter'));


app.listen(port, function(error){
    if(error){
        console.log('Error', error);
    }

    console.log('Server is up and running on port', port);
});