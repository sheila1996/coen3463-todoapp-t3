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

router.post('/deleteOne', function(req, res, next){
  Note.findByIdAndRemove(req.body.noteid, function (err, res){
    if(!err){
    console.log("deleted");
    }
    })
  console.log(req.body.user)
    Note.find({user: req.body.user}, function (err, drink){
    if(err){
      return res.json({
        success: false,
        response: err
      });
     }else{
      return res.json({
        success: true,
        response: drink
      })
     }

      })
  
});

router.post('/updateComplete', function(req, res, next){
  console.log(req.body.noteid);
  if(req.body.completeid){  
    Note.update({_id: req.body.noteid}, {isCompleted: false}, function (err, res){
    if(err){
      console.log(err);
    }else{
      console.log("updated");
    }
  })
}else{
  Note.update({_id: req.body.noteid}, {isCompleted: true}, function (err, res){
    if(err){
      console.log(err);
    }else{
      console.log("updated");
    }
  })
}
  Note.find({user: req.body.user}, function(err, night){
    if(!err){
      return res.json({
        success: true,
        response: night
      })
    }
  })
});


router.post('/delcheck', function(req, res, next){
  console.log(req.body.user)
  Note.remove({user: req.body.user, isCompleted: true}, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("deleted");
    }
  })
  Note.find({user: req.body.user}, function (err, remaining){
    if(!err){
      return res.json({
        success: true,
        response: remaining
      })
    }
  })
});

router.post('/delall', function(req, res, next){
  console.log(req.body.user)
  Note.remove({user: req.body.user}, function(err){
    if(err){
      console.log(err);
    }else{
      console.log("deleted");
    }
  })
  Note.find({user: req.body.user}, function (err, remaining){
    if(!err){
      return res.json({
        success: true,
        response: remaining
      })
    }
  })
});



module.exports = router;