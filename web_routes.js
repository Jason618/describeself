var express = require('express');
var router = express.Router();

var index = require('./routes/index');
var users = require('./routes/users');
var register = require('./routes/register');
var api = require('./routes/api');

//home page
router.get('/', index)

//user page
router.get('/users', users);

//register
router.get('/register', register);




//apis
//register
router.post('/api/register', api);


module.exports = router;
