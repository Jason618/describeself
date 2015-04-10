var express = require('express');
var router = express.Router();
var Users = require('../models/users');
/* GET users listing. */
router.get('/users', function (req, res, next) {
    Users.getAllUsers(function (result) {
        res.render('users', {
            title: 'Express',
            users: result
        });
    });

});

module.exports = router;
