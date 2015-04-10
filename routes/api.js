var express = require('express');
var router = express.Router();
var Users = require('../models/users');
/* GET users listing. */
router.post('/api/register', function (req, res, next) {
    var name = req.body.name;
    var user = {
        name: name
    };
    console.log('input user:' + user);
    Users.addUser(user, function (result) {
        console.log('register result:' + result);
        res.redirect('/');
    });

});

module.exports = router;
