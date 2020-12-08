/*--
Author: Sage Groupe
Date: 12-11-2020
FileName : app.js

Routing for Contact list
*/



let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

let passport = require('passport');

let surveyController = require('../controllers/survey');


/* GET Route for the Business List page - READ Operation */
router.get('/', surveyController.displaySurveyList);

/* GET Route for displaying the Add page - CREATE Operation */
router.get('/add', surveyController.displayAddPage);

/* POST Route for processing the Add page - CREATE Operation */
router.post('/add', surveyController.processAddPage);

/* GET Route for the Business List page - READ Operation */
router.get('/open-surveys', surveyController.displayOpenSurveyList);

/* POST Route for processing the Survey page */
router.post('/open-surveys', surveyController.processOpenSurvey);

/* GET Route for the Business List page - READ Operation */
router.get('/survey-multi-select', surveyController.displayMultiSelect);

/* POST Route for  Multi Select  - CREATE Operation */
router.post('/survey-multi-select', surveyController.processMultiSelect);

/* GET Route for Agree-Disagree page - READ Operation */
router.get('/survey-agree-disagree', surveyController.displayAgreeDisagree);

/* POST Route for Agree-Disagree  - CREATE Operation */
router.post('/survey-agree-disagree', surveyController.processAgreeDisagree);

/* GET Route for Short Answer page - READ Operation */
router.get('/survey-short-answer', surveyController.displayShortAnswer);

/* POST Route for Short Answer  - CREATE Operation */
router.post('/survey-short-answer', surveyController.processShortAnswer);

/* GET Route for displaying the Edit page - UPDATE Operation */
router.get('/edit/:id', surveyController.displayEditPage);

/* POST Route for processing the Edit page - UPDATE Operation */
router.post('/edit/:id', surveyController.processEditPage);

/* GET to perform  Deletion - DELETE Operation */
router.get('/delete/:id', surveyController.performDelete);

module.exports = router;