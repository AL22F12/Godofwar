// JavaScript Document
	$(document).ready(function(e){
 
    $('#logo img').tap(function(e){	
    $('#logo img').toggleClass('clicked');
	$('#vista img').toggleClass('clicked');
});//click 

    $('#vista img').tap(function(e){	
	 $("#roar")[0].play();	
	 $.mobile.navigate( "#principal" );
	});
	
	$('#in').tap(function (e) {
 	 $.mobile.navigate( "#inicios" );
	});
	
	$('#ta_di').tap(function (e) {
		$.mobile.navigate( "#tarea" );
	});
	
	$('#olim').tap(function (e) {
		$.mobile.navigate( "#olimpo" );
	});
	
	$('#dios').tap(function (e) {
		$.mobile.navigate( "#asecino" );
	});
	
	$('#ven').tap(function (e) {
		$.mobile.navigate( "#venganza" );
	});
	
	$('#ac').tap(function (e) {
		$.mobile.navigate( "#acerca" );
	});
		


document.addEventListener("deviceready",function(){
  $('#B_Vibrar').tap(function(){
    navigator.notification.vibrate(500);
  });
   $('#A_beep').tap(function(){
    navigator.notification.Beep(1);
  });
 },false); //deviceready
}); //document ready