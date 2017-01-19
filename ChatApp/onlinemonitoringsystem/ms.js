/**
 * Created by eddie on 14/01/2017.
 */
/**This will act as a monitoring system and will be used to monitor chat data**/
var record = require('./record');
var analyse = require('./analyse');
var inject = require('./inject');
var document = require('./document');

function ms(){
    this.analysis = analyse;
    this.injection = inject;
}

module.exports = new ms();