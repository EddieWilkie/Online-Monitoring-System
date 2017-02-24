var express = require('express');
var router = express.Router();
var http = require('http');
var rest = require('../public/javascripts/RESTGET');

router.get('/',function(req, res, next){
    var options = {
        host: 'localhost',
        port: 4000,
        path: '/get-data',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    };
    //get the data from the
    rest.getJSON(options,function(statusCode,result){
        console.log("onResult: (" + statusCode + ")" + JSON.stringify(result));
        res.statusCode = statusCode;
        res.render('chatdata',{title: 'API data',message: result.message,classification:result.type,log:result.log,target:result.target});
    });
});

module.exports = router;
