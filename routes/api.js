var express = require('express');
var router = express.Router();
var Users = require('../models/users');
/* GET users listing. */
router.post('/api/register', function (req, res, next) {
    var email = req.body.email;
    var password = req.body.password;
    var user = {
        email: email,
        password: password
    };
    console.log('input user:' + user);
    Users.addUser(user, function (result) {
        console.log('register result:' + result);
        res.redirect('/');
    });

});

router.post('/api/delete', function (req, res, next) {
    var email = req.body.email;
    var user = {
        email: email
    };
    console.log('delete user email:' + user);
    Users.deleteUserByEmail(user, function (result) {
        console.log('register result:' + result);
        res.redirect('/');
    });

});


module.exports = router;
