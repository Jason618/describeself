var express = require('express');
var router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
var deleteUser = require('./routes/deleteUser');
var api = require('./routes/api');

//home page
router.get('/', index)

//user page
router.get('/users', users);

//register
router.get('/register', register);

//delete user
router.get('/deleteUser', deleteUser);




//apis
//register
router.post('/api/register', api);
router.post('/api/delete', api);


module.exports = router;
