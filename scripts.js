document.getElementById("soundTag").innerHTML = "<audio volume loop preload='none' src='break.wav'></audio>";

$('#button_play').on('click', function() {
	//I added this
	$("audio")[0].play();
  
  $('#button_pause').show();
  $('#button_play').hide();
});
$('#button_pause').on('click', function() {
	//I added this
	$("audio")[0].pause();
  
  $('#button_play').show();
  $('#button_pause').hide();
  
  
  

});

