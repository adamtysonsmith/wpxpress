var express = require('express');
var router = express.Router();

/* GET Home Page. */
router.get('/', function(req, res) {
    res.render('index', { 
        title: 'WPXpress Website Builder',
        heading1: 'WPXpress Website Builder'
    });
});

module.exports = router;
