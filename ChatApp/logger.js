/**
 * Created by eddie on 20/12/2016.
 */
var fs = require('fs');

function logging(data){
    fs.appendFile('./log.txt',data,function(err){
        if(err){
            console.error(err);
        }
        console.log('Message Appended');
    });
}

function logger() {
    this.log = logging;
}

module.exports = new logger();