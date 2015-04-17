var express = require('express');
var router = express.Router();

router.get('/deleteUser', function (req, res, next) {
    res.render('deleteUser', {
        title: 'delete User'
    });
});

module.exports = router;
