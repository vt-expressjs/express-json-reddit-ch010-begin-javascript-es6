var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.get('/hello.json', function (req, res, next) {
    res.json({
        "api":"/hello.json",
        name: 'hello'
    })
})


router.get('/.json', function (req, res, next) {
    res.json({
        "api":"/.json",
        "url": "hello"
    })
})

module.exports = router;
