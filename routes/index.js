var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

let url = 'https://express-json-reddit-ch010-begi.herokuapp.com/'

router.get('/.json',
    function (req, res, next) {

        res.json({
            "api": "/.json",
            "url": `${url}hello`
        })
    })

router.get('/:urlName.json',
    function (req, res, next) {
    let urlName = req.params["urlName"]
        res.json({
            "api": `/${urlName}.json`,
            "name": `${urlName}`
        })
    })

module.exports = router;
