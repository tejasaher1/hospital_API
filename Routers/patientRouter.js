const express = require('express');
const Router = express.Router();

const passport = require('passport');

const patientController = require('../Controllers/patientRegistration');
const ReportController = require('../Controllers/ReportGenerationController')

Router.post('/register', passport.authenticate('jwt', {session : false}) , patientController.registration);

Router.post('/:id/create_report', passport.authenticate('jwt', {session : false}), ReportController.createReport);

Router.post('/:id/all_reports',passport.authenticate('jwt', {session : false}), ReportController.patientReport);

module.exports = Router;