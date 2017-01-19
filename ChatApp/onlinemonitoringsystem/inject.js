/**
 * Created by eddie on 14/01/2017.
 */
/**This module is but part of the monitoring system. It will take in a score and depending on the value, will return a message injection**/

function messageInject(score){
    var limit = 5;
    if(score > limit){
        return "Warning: an alarming amount of explicit content has been used in this chat.\nThis chat is now being recorded and will be sent to the police.";
    }else{
        return '';
    }
}
module.exports = messageInject;