var fs = require('fs');

function logging(data){
    fs.appendFileSync('./log.txt',data,'utf-8');
}

function getLog(){
    return fs.readFileSync('log.txt','utf-8');
}

function logger() {

}

logger.prototype.log = logging;
logger.prototype.getLog = getLog;

module.exports = new logger();