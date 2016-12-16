/**
 * Created by eddie on 16/12/2016.
 */
document.ready(function(){
    var socket = io.connect("localhost:3000");
    $('#chat').hide();
    $('#name').focus();
    $('#form').submit(function(event){
        event.preventDefault();
    });
});