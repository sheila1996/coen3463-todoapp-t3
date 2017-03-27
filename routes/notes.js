var passport = require('passport');
var User = require('../models/users');
var Note = require('../models/notes');

var express = require('express');
var router = express.Router();

var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;

var userId ='58cffa2ebc0d5f11f8fd272f'; 

router.post('/addNew', function(req, res, next){
  const note = new Note({
    name: req.body.name,
    user: req.body.user,
    isCompleted: false
  });
  console.log(note);
  note.save((err, notes)=>{
    if(err){
      console.log("error in saving");
      console.log(err)
      res.json({
        success: false,
        title: 'Error',
        response: err.errors.name.message
      });
      return;
      
    }else{
        console.log("success");
    res.status(201).json({
      success: true,
      title: "success",
      response: notes
    });
    }
    
  });
});

router.post('/getAll', function(req,res, next){
  console.log({user: req.body.user});
  Note.find({user: req.body.user}, function (err, list){
    
    if(err){
      return res.json({
        success: false,
        response: "Error"
      });
    }
    if(!err){
      return res.json({
        success: true,
        response: list
      })
    }
  })
});



module.exports = router;