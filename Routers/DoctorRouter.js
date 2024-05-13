const express = require('express');
const Router = express.Router();
const doctorController = require('../Controllers/doctorRegistration');

Router.post('/register', doctorController.drRegistration);

Router.post('/login', doctorController.signIn);

module.exports = Router;
