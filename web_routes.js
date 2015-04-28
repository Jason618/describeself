var express = require('express');
var router = express.Router();
// index
var index = require('./routes/index');
var joinus = require('./routes/joinus');
var users = require('./routes/users');
var register = require('./routes/register');
var deleteUser = require('./routes/deleteUser');
var api = require('./routes/api');

//home page
router.get('/', index)

//join us page
router.get('/joinus', joinus);

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
