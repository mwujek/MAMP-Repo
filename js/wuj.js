/*jshint devel:true */
var windowWidth;
var windowHeight;

$(document).ready(function(){
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();
	//var mobileQuery = 600;
	//jQuery.fn.reverse = [].reverse;
	//listItems.reverse().each(function(){ ... });

	// toggle menu
	var menuBtn = $('.menu-btn');
	var navList = $('#nav-list');
	var listItems = navList.find('li');
	var bar = $('#indicator-line');
	var sectionTitle = $('.section-title');
	bar.velocity({scaleX:0},{duration:0});
	sectionTitle.velocity({opacity:0, left:-10},{duration:0});
	listItems.each(function(){
		$(this).velocity({left:-50,opacity:0},{duration:0, visibility: 'hidden'});
	});

	menuBtn.data({active:false});
	bar.data({active:false});

	function toggleBar(){
		setTimeout(function(){
			if ( bar.data('active') === false){
				bar.velocity({scaleX:1},{duration:500});
				setTimeout(function(){
					sectionTitle.velocity({opacity:1, left: 0},{duration:500});
				},500);
				bar.data({active:true});
			} else{
				bar.velocity({scaleX:0},{duration:500});
				setTimeout(function(){
					sectionTitle.velocity({opacity:0, left: -10},{duration:500});
				},500);
				bar.data({active:false});
			}
		},500);
	}


	menuBtn.click(function(event) {
		event.preventDefault();
		if (menuBtn.data('active') === false){
			toggleBar();
			listItems.each(function(index){
				$(this).velocity({left:0,opacity:1},{delay: index * 100, duration:500, visibility: 'visible'});
			});
			menuBtn.toggleClass('active-nav');
			menuBtn.data({active:true});
		} else{
			toggleBar();
			listItems.each(function(index){
				$(this).velocity({left:-50,opacity:0},{delay: index * 100, duration:500, visibility: 'hidden'});
			});
			menuBtn.toggleClass('active-nav');
			menuBtn.data({active:false});

		}

	});

	// filter work

	$('.work-list li').each(function(){
		var listEl = $(this);
		var tags = $(this).children('span');
		listEl.data({
			mobile:false,
			proto:false,
			d3:false,
			web:false,
			installation:false,
			framer:false,
			processing:false
		});
		$.each( tags, function() {
			var tagClass = $(this).attr('class');
			if($(this).hasClass('tag-mobile')){ listEl.data('mobile', true); }
			if($(this).hasClass('tag-proto')){ listEl.data('proto', true); }
			if($(this).hasClass('tag-d3')){ listEl.data('d3', true); }
			if($(this).hasClass('tag-web')){ listEl.data('web', true); }
			if($(this).hasClass('tag-installation')){ listEl.data('installation', true); }
			if($(this).hasClass('tag-mobile')){ listEl.data('mobile', true); }
			if($(this).hasClass('tag-framer')){ listEl.data('framer', true); }
			if($(this).hasClass('tag-processing')){ listEl.data('processing', true); }
		});

		console.log(listEl.data());
	});

	$('#tag-ul li').each(function(){
		$(this).data({active:false});
		$(this).click(function() {
			var spanEl = $(this).find('span');
			var el = $(this);
			var selected = $('.work-list').find('li')
			if (el.data('active') === false){
				if( spanEl.hasClass('tag-mobile')){

					$.each( selected, function(i) {
						console.log(i);
						if ($(this).data('mobile') === true){
							console.log('mobile!');
							
						} else {
							$(this).addClass('inactive');
						}
					});
				}
				el.data({active:true});
			} else {
				selected.removeClass('inactive');
				el.data({active:true});
			}
			
			}); // end of click
		}); // end of each
	// giants link
	var giantsLink = $('.giants-link');
	giantsLink.click(function() {
		console.log('change');
		var picture = $('.profile-pic');
		picture.velocity({opacity:0},{
			duration:500,
			complete: function(){
				picture.css({'background':'url(img/giants-yeah.jpg)', 'background-size': 'cover'});
				console.log('new image');
			}
		})
		.velocity({opacity:1},{duration:500,delay:300});
	});
	// bio btn
	$('.bio-btn-list .btn-text').each(function(){
		var hiddenEl = $(this).parent().find('.hidden-btn');
		var hiddenWidth = hiddenEl.outerWidth();
		$(this).data({active:false});
		hiddenEl.velocity({width:0, borderColor: '#fff', padding:0},{duration:0});
		$(this).click(function() {
			var attribute = $(this).parent().attr('class');
			if ($(this).data('active') === false){

				if(attribute === 'btn-email'){
					hiddenEl.velocity({width:200, borderColor: '#ccc', paddingRight:20,paddingLeft:20},{duration:500});
					$('.email-address').typed({
						strings: ["mattwujek@gmail.com"],
						contentType: 'html',
						typeSpeed: 50,
						showCursor: false,
						cursorChar: "|"

					});
				} else {
					hiddenEl.velocity({width:hiddenWidth, borderColor: '#ccc', paddingRight:20,paddingLeft:20},{duration:500});
				}
				$(this).data({active:true});
			} else{
				console.log('shrink');
				hiddenEl.velocity({width:0, borderColor: '#fff', paddingRight:0,paddingLeft:0},{duration:500});
				$(this).data({active:false});
			}
		});
	});


// AJAX loading
// var newHash      = "",
// $mainContent = $("#ajax-container");

// $("#nav-list li").delegate("a", "click", function() {
// 	window.location.hash = $(this).attr("href");
// 	return false;
// });

// $mainContent.delegate("a.project-link", "click", function() {
// 	window.location.hash = $(this).attr("href");
// 	return false;
// });

// $(window).bind('hashchange', function(){

// 	newHash = window.location.hash.substring(1);

// 	if (newHash) {
// 		$mainContent.css('opacity', 0);
// 		$loadingCanvas.css('opacity', 1);
// 		setTimeout(function(){
// 			$mainContent.load(newHash + " #content", function(){

// 				$mainContent.css('opacity', 1);
// 				$('#ajax-container .col').each(function(index) {
// 					$loadingCanvas.css('opacity', 0);

// 					var el = $(this);
// 					el.css('opacity',0);
// 					setTimeout(function(){
// 						el.css('opacity',1);
// 					}, (index + 1) * 250);
//                 		 //console.log(index);
//                 		});
// 				if(windowWidth < mobileQuery){
// 					toggleNavElementsMobile('exitNav');
// 				} else{
// 		    		toggleNavElements();
// 		   		}

// 		   		// blog stuff
// 		   		if(newHash === "blog.php"){
// 		   			$('.blog-heading-img').each(function(){
// 		   				var infoBlock = $(this).parents('.blog-roll').find('.post-info');
// 		   				$(this).appendTo(infoBlock);
// 		   			});
// 		   		}
// 			});
// 		},500);


//          // adjust link styles
//          $("#nav-list .menu-circle").removeClass("active-nav-link");
//          $("#nav-list a[href="+'"'+newHash+'"'+"]").find('.menu-circle').addClass("active-nav-link");


//         }
//     });

//$(window).trigger('hashchange');



}); // end of ready function


$( window ).resize(function() {
	windowWidth = $( window ).width();
	windowHeight = $( window ).height();
});