/*--
Author: Sage Groupe
Date: 12-11-2020
FileName : app.js
*/


let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

//let jwt = require('jsonwebtoken');

// create a reference to the model
let Survey = require('../models/survey');


module.exports.displayOpenSurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(surveyList);
            console.log("inside /survey-open-list");
            
            res.render('survey-open-list', 
            {title: 'Provide Survey', 
            SurveyList: surveyList});      
        }
    });
}

module.exports.processOpenSurvey = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(surveyList);
            console.log("inside /survey-open-list");
            
            res.render('survey-open-list', 
            {title: 'Provide Survey', 
            SurveyList: surveyList});      
        }
    });
}



module.exports.displaySurveyList = (req, res, next) => {
    Survey.find((err, surveyList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            console.log(surveyList);
            console.log("inside /servey-list");
            if(req.user){
                console.log(req.user ? req.user.displayname : '');
            } else{
                console.log("no displayname passed here");
            }
            
            res.render('survey-list', 
            {title: 'Survey List', 
            SurveyList: surveyList, 
            displayName: req.user ? req.user.displayname : ''});      
        }
    });
}

module.exports.displayMultiSelect = (req, res, next) => {
    if(req.user){
        res.render('survey-multi-select', {title: 'Multi Select Survey', 
    displayName: req.user ? req.user.displayname : ''}) ;
    } 
}


module.exports.processMultiSelect = (req, res, next) => {
    if(req.user){
        
        let newSurvey = Survey({
            "title": newSurveySelected.title,
            "subtitle": newSurveySelected.subtitle,
            "description": newSurveySelected.description,
            "start":newSurveySelected.start,
            "end":newSurveySelected.end,
            "enterQuestion1": newSurveySelected.enterQuestion1,
            "enterQuestion2": newSurveySelected.enterQuestion2,
            "enterQuestion3": newSurveySelected.enterQuestion3,
            "enterMultiQuestion": req.body.enterMultiQuestion,
            "enterMultiAnswer1": req.body.enterMultiAnswer1,
            "enterMultiAnswer2": req.body.enterMultiAnswer2,
            "enterMultiAnswer3": req.body.enterMultiAnswer3,
            "enterMultiAnswer4": req.body.enterMultiAnswer4
        });
        Survey.create(newSurvey, (err, Survey) =>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the list
                res.redirect('/survey-list');
            }
        });

    } 
}


module.exports.displayAgreeDisagree = (req, res, next) => {
    if(req.user){
        res.render('survey-agree-disagree', {title: 'Agree - Disagree Survey', 
                displayName: req.user ? req.user.displayname : ''}) ;
    } 
}


module.exports.processAgreeDisagree = (req, res, next) => {
    if(req.user){
        
        let newSurvey = Survey({
            "title": newSurveySelected.title,
            "subtitle": newSurveySelected.subtitle,
            "description": newSurveySelected.description,
            "start":newSurveySelected.start,
            "end":newSurveySelected.end,
            "enterQuestion1": newSurveySelected.enterQuestion1,
            "enterQuestion2": newSurveySelected.enterQuestion2,
            "enterQuestion3": newSurveySelected.enterQuestion3,
            "enterAgreeDisagreeQuestion1": req.body.enterAgreeDisagreeQuestion1,
            "enterAgreeDisagreeQuestion2": req.body.enterAgreeDisagreeQuestion2,
            "enterAgreeDisagreeQuestion3": req.body.enterAgreeDisagreeQuestion3
        });
        Survey.create(newSurvey, (err, Survey) =>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the list
                res.redirect('/survey-list');
            }
        });
    } 
}


module.exports.displayShortAnswer = (req, res, next) => {
    if(req.user){
        res.render('survey-short-answer', {title: 'Short - Answer Survey', 
                displayName: req.user ? req.user.displayname : ''}) ;
    } 
}


module.exports.processShortAnswer = (req, res, next) => {
    if(req.user){
        
        let newSurvey = Survey({
            "title": newSurveySelected.title,
            "subtitle": newSurveySelected.subtitle,
            "description": newSurveySelected.description,
            "start":newSurveySelected.start,
            "end":newSurveySelected.end,
            "enterQuestion1": newSurveySelected.enterQuestion1,
            "enterQuestion2": newSurveySelected.enterQuestion2,
            "enterQuestion3": newSurveySelected.enterQuestion3,
            "enterShortQuestion1": req.body.enterShortQuestion1,
            "enterShortQuestion2": req.body.enterShortQuestion2,
            "enterShortQuestion3": req.body.enterShortQuestion3
        });
        Survey.create(newSurvey, (err, Survey) =>{
            if(err)
            {
                console.log(err);
                res.end(err);
            }
            else
            {
                // refresh the list
                res.redirect('/survey-list');
            }
        });
    } 
}




module.exports.displayAddPage = (req, res, next) => {
    if(req.user){
        res.render('survey-add', {title: 'Add Survey', 
    displayName: req.user ? req.user.displayname : ''}) 
    } 
             
}

module.exports.processAddPage = (req, res, next) => {
    console.log('recieved the request....');
    console.log(req.body.title);
    console.log(req.body.subtitle);

    newSurveySelected = Survey({
        "title": req.body.title,
        "subtitle": req.body.subtitle,
        "description": req.body.description,
        "type": req.body.options,
        "enterQuestion1": req.body.enterQuestion1,
        "enterQuestion2": req.body.enterQuestion2,
        "enterQuestion3": req.body.enterQuestion3,
        "start":req.body.start,
        "end":req.body.end
    });

   if(req.body.options === "mcsurvey"){
        res.redirect('/survey-list/survey-multi-select');
   } else if (req.body.options === "adsurvey") {
        res.redirect('/survey-list/survey-agree-disagree');
   } else {
        res.redirect('/survey-list/survey-short-answer');
   }
}

module.exports.displayEditPage = (req, res, next) => {
    let id = req.params.id;

    Survey.findById(id, (err, surveyToEdit) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            //show the edit view
            //TODO need to check res.render('survey-edit', {title: 'Edit Survey', business: businessToEdit, 
            //displayName: req.user ? req.user.displayName : ''})
            res.render('survey-edit', {title: 'Edit Survey', survey: surveyToEdit, 
            displayName: req.user ? req.user.displayname : ''})
        }
    });
}

module.exports.processEditPage = (req, res, next) => {
    let id = req.params.id

    let updatedSurvey = Survey({
        "_id": id,
        "title": req.body.title,
        "subtitle": req.body.subtitle,
        "description": req.body.description,
        "enterQuestion1": req.body.enterQuestion1,
        "enterQuestion2": req.body.enterQuestion2,
        "enterQuestion3": req.body.enterQuestion3,
        "start":req.body.start,
        "end":req.body.end
    });

    Survey.updateOne({_id: id}, updatedSurvey, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
            // refresh the business list
            res.redirect('/survey-list');
        }
    });
}

module.exports.performDelete = (req, res, next) => {
    let id = req.params.id;

    Survey.remove({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.end(err);
        }
        else
        {
             // refresh the business list

             res.redirect('/survey-list');
        }
    });
}

module.exports.displaySurveyContactList = (req, res, next) => {
    Contact.find((err, SurveyContactList) => {
        if(err)
        {
            return console.error(err);
        }
        else
        {
            //console.log(BusinessContactList);

            res.render('survey-list', 
            {title: 'Survey List', 
            SurveyList: SurveyContactList, 
            displayName: req.user ? req.user.displayname : ''});      
        }
    }).sort({"firstName":1}); // contact list alphabetically sorted 
}
