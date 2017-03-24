var passport = require('passport');
var User = require('../models/users');
var Note = require('../models/notes');

var express = require('express');
var router = express.Router();

var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;

var userId =''; 

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




module.exports = router;