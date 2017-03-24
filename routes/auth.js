var passport = require('passport');
var User = require('../models/users');
var express = require('express');
var router = express.Router();

var passport = require('passport');
var  LocalStrategy = require('passport-local').Strategy;



router.route('/register')
  .post(function(req, res, next) {
    User.register(new User({
      username: req.body.username,
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email
      }), req.body.password, function(err, account) {
      if(err) {
        console.log(err)
        return res.send({
        success: false,
        title: 'Error',
        response: err
        }); 
      }
      req.login(account, function(err) {
        if(err){
          res.send({response:err})
          return;
        }else{
          res.send({
            success: true,
            title: 'Reg Success, Logging in.',
            response: account,
            redirect: '/notes'
          })
        }
      });
    })
  })

router.get('/getUser', (req, res)=>{
  const user = req.user;
  res.json({
    response: user
  });
});


  router.post('/login', function(req, res, next) {
  User.authenticate()(req.body.username, req.body.password,(err, user, options)=>{
    if (err) return res.status(500).json({
      success:false,
      title:'Error',
      response:err
    });
    if (user === false) {
      return res.json({
        success: false,
        title: 'Error',
        response: options.message,
      });
    } else {
        req.login(user,(err)=>{
           if (err) return res.status(500).json({
            success:false,
            title:'Error',
            response:err
          });
          console.log(req.user);
          res.status(200).json({
            success: true,
            title: 'Success',
            response: user,
            redirect:'/notes'
          });
        });
      }
  });
});


module.exports = router;