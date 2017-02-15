/**
 * Created by eddie on 14/01/2017.
 */
var dictionary = ['hello','sup','what','is'];
var score = 0;
function analyse(data){
    for(var i = 0; i < dictionary.length; i++) {
        if (data.search(dictionary[i]) >= 0) {
            score++;
        }
    }
    return score;
}

module.exports = analyse;