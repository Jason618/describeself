var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/joinus', function (req, res, next) {
    res.render('joinus', {
        title: 'Express'
    });
});


module.exports = router;
