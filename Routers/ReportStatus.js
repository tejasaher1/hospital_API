const express = require('express');
const passport = require('passport');
const Router = express.Router();

const ReportController = require('../Controllers/ReportGenerationController')

Router.post('/:status', passport.authenticate('jwt', {session : false}),  ReportController.allPatientReport);

module.exports = Router;