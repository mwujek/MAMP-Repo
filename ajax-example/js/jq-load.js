
var fadeTime = 500
$('nav a').on('click', function(e) {                 // User clicks nav link
  e.preventDefault();                                // Stop loading new link
  var url = this.href;                              // Get value of href
  $('nav').toggleClass('toggled');
  $('nav a.current').removeClass('current');         // Clear current indicator
  $(this).addClass('current');                       // New current indicator
  $('#container').fadeOut(fadeTime);
  setTimeout(function(){
  	$('#container').remove();                          // Remove old content
  },fadeTime)
  setTimeout(function(){
  	$('#content').load(url + ' #container').hide().fadeIn(fadeTime); // New content
  },fadeTime+100);

});