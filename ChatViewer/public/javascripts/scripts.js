
$("#msg1").hide();
$("#msg2").hide();
$("#msg3").hide();

$('#chat1').click(function(){
    $('#msg1').toggle();
});
$('#chat2').click(function(){
    $('#msg2').show();
});
$('#chat3').click(function(){
    $('#msg3').show();
});