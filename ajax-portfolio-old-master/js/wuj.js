/*jshint devel:true */
var windowWidth,
windowHeight;

//mobileQuery = 600;
//runOnce = true;
$(document).ready(function(){
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();
	var mobileQuery = 600;
	jQuery.fn.reverse = [].reverse;
	var $loadingCanvas = $('#loadingCanvas');
	//var $textContainer = $('.text-container');
	// if(windowWidth < mobileQuery){
	// 	console.log('mobile');
	// 	$.getScript("js/min/paperWuj-mobile-min.js", function(){

	// 		console.log('loaded mobile script!');

	// 	});
	// }

	// if (windowWidth > mobileQuery){
	// 	console.log('desktop!');

	// 	$.getScript( "js/min/paperWuj-min.js", function( data, textStatus, jqxhr ) {
 //  			console.log( data ); // Data returned
 //  			console.log( textStatus ); // Success
 //  			console.log( jqxhr.status ); // 200
 //  			console.log( "Load was performed." );
	// 	});
	// }

	var $menuBtn = $('.menu-btn'),
		$mobileMenuBtn = $('#mobile-menu');
	//var $menuList = $('nav ul');

	function toggleNavElements(){
		if($menuBtn.hasClass('active-menu-btn')){
			$menuBtn.text('menu');
		} else{
			$menuBtn.text('close');
		}

		$menuBtn.toggleClass('active-menu-btn');

		$('nav li').each(function(i) { 
			var el=$(this);
			setTimeout(function() { 
				el.toggleClass('visible-li');
			}, i * 100); 
		});
	}

	function toggleNavElementsMobile(exitNav){
		console.log('inside function');
		$mobileMenuBtn.toggleClass('active-menu-btn-mobile');


		// expanding nav elements
		if ($mobileMenuBtn.hasClass('active-menu-btn-mobile')){
			$('nav li').each(function(i) {
				var delayLength = i *100;
				var el = $(this);
				el.velocity({ top: 41 * (i) + 80 },{duration: 500, delay : delayLength});
			});
		}

		// collapse nav elements
		if($mobileMenuBtn.hasClass('active-menu-btn-mobile') === false || exitNav) {
			$('nav li').reverse().each(function(i) {
			var delayLength = i *100;
				var el=$(this);
				el.velocity({ top: 0},{duration: 500, delay : delayLength});
			});
		}
	}

	$menuBtn.click(function(e) {
		e.preventDefault();
		toggleNavElements();
	});

	$mobileMenuBtn.click(function(e) {
		e.preventDefault();
		console.log('clicked!');
		if($(this).hasClass('active-menu-btn-mobile')){
			//$textContainer.velocity({ opacity: 1},{duration: 300});
		} else {
			//$textContainer.velocity({ opacity: 0.1},{duration: 300});
		}
		toggleNavElementsMobile();
	});


// hover video
$('#ajax-container').delegate('.project-view','mouseenter', function(e) {
	e.currentTarget.childNodes[1].play();
	console.log(e.currentTarget.childNodes[1]);
});
$('#ajax-container').delegate('.project-view','mouseleave', function(e) {
	e.currentTarget.childNodes[1].pause();
});


// AJAX loading
var newHash      = "",
$mainContent = $("#ajax-container");

$("#nav-list li").delegate("a", "click", function() {
	window.location.hash = $(this).attr("href");
	return false;
});

$mainContent.delegate("a.project-link", "click", function() {
	window.location.hash = $(this).attr("href");
	return false;
});

$(window).bind('hashchange', function(){

	newHash = window.location.hash.substring(1);

	if (newHash) {
		$mainContent.css('opacity', 0);
		$loadingCanvas.css('opacity', 1);
		setTimeout(function(){
			$mainContent.load(newHash + " #content", function(){
				
				$mainContent.css('opacity', 1);
				$('#ajax-container .col').each(function(index) {
					$loadingCanvas.css('opacity', 0);

					var el = $(this);
					el.css('opacity',0);
					setTimeout(function(){
						el.css('opacity',1);
					}, (index + 1) * 250);
                		 //console.log(index);
                		});
				if(windowWidth < mobileQuery){
					toggleNavElementsMobile('exitNav');
				} else{
		    		toggleNavElements();
		   		}

		   		// blog stuff
		   		if(newHash === "blog.php"){
		   			$('.blog-heading-img').each(function(){
		   				var infoBlock = $(this).parents('.blog-roll').find('.post-info');
		   				$(this).appendTo(infoBlock);
		   			});
		   		}
			});
		},500);


         // adjust link styles
         $("#nav-list .menu-circle").removeClass("active-nav-link");
         $("#nav-list a[href="+'"'+newHash+'"'+"]").find('.menu-circle').addClass("active-nav-link");


        }
    });

$(window).trigger('hashchange');
// var fadeTime = 500;

//     var newHash      = "",
//         $mainContent = $("#ajax-container");
//         //$pageWrap    = $(".container"),
//         //$el;


//     $("nav").delegate("a", "click", function() {
//         window.location.hash = $(this).attr("href");
//         console.log( $(this).attr("href") );
//         return false;
//     });

//     $(window).bind('hashchange', function(){

//         newHash = window.location.hash.substring(1);

//         if (newHash) {
//             $mainContent
//                 .find("#ajax-container")
//                 .fadeOut(fadeTime, function() {
//                     $mainContent.hide().load(newHash + " #content", function() {
//                         $mainContent.fadeIn(fadeTime - 100);
//                         $("nav a").removeClass("active-nav-link");
//                         $("nav a[href="+newHash+"]").addClass("active-nav-link");
//                     });
//                 });
//         }
//     });

//     $(window).trigger('hashchange');

// nav links
// $('nav > ul > li a').click(function(e) {
// 	e.preventDefault();
// 	var url = e.target.href;

// 	if ($(this).hasClass('active-nav-link')){
//         console.log('already active');
// 	} else {
// 		// // push history
// 		// if (typeof(window.history.pushState) == 'function') {
// 		//     window.history.pushState(null, url, url);
// 		// } else {
// 		//     window.location.hash = '#!' + url;
// 		// }
// 		console.log(e);
// 		$(this).parents('ul').find('.active-nav-link').toggleClass('active-nav-link');
// 		$(this).toggleClass('active-nav-link');

// 		$('#ajax-container').css('opacity','0');
// 		setTimeout(function(){
// 			$('#content').remove();
// 			$('#ajax-container').css('opacity',0);
// 		},fadeTime + 50);
// 		setTimeout(function(){
// 			$('#ajax-container').load(url + ' #content').css('opacity',1);
// 			toggleNavElements();
// 		}, fadeTime + 500);
// 	}

//  });

// on event collects DOM elements after AJAX load
// $('#ajax-container').on('click','.project-link',function(e){
//     e.preventDefault();
//     var url = e.currentTarget.href;
//     var activeLink = document.getElementsByClassName('active-nav-link');
//     // remove active links
//     activeLink[0].className = '';

// 	$('#ajax-container').css('opacity','0');
// 	setTimeout(function(){
// 		$('#content').remove();
// 		$('#ajax-container').css('opacity',0);
// 	},fadeTime + 50);
// 	setTimeout(function(){
// 		$('#ajax-container').load(url + ' #content').css('opacity',1);
// 		//toggleNavElements();
// 	}, fadeTime + 500);
// });




// work section

var $projectView = $(".project-view");
$projectView.each(function() {
	var el=$(this);
	var contaienrH = el.innerHeight();
	var contentTitleH = el.find('.project-title').innerHeight();
	var $title = el.find('.project-title');
	$title.css('top', ((contaienrH - contentTitleH)/2) + "px");
	console.log('done');

});

// social email address
$('#ajax-container').delegate('.mail-icon','click', function(e) {
	e.preventDefault();
	$('.email-address').typed({
    	strings: ["mattwujek@gmail.com"],
    	contentType: 'html',
    	typeSpeed: 50,
    	showCursor: true,
    	cursorChar: "|"

});
});

}); // end of ready function


$( window ).resize(function() {
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();
});