var express = require('express');
var router = express.Router();
var http = require('http');
var rest = require('../public/javascripts/RESTGET');

router.get('/',function(req, res, next){
    var options = {
        host: 'localhost',
        port: 4000,
        path: '/get-analytics',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //get the data from the
    rest.getJSON(options,function(statusCode,result){
        console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        res.statusCode = statusCode;
        res.render('analytics',{title: "0.6666" ,score:result.score});
    });
});

module.exports = router;
