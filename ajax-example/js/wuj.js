/*jshint devel:true */

$(document).ready(function(){

	var $menuBtn = $('.menu-btn');
	var $menuList = $('nav ul');

	function toggleNavElements(){
		$('nav li').each(function(i) { 
		    var el=$(this);
		    setTimeout(function() { 
		        el.toggleClass('visible-li');
		    }, i * 120); 
		});
	}


	$menuBtn.click(function(e) {
		e.preventDefault();
		
		if($menuBtn.hasClass('active-menu-btn')){
			$menuBtn.text('menu');
		} else{
			$menuBtn.text('close');
		}

		$menuBtn.toggleClass('active-menu-btn');


		toggleNavElements();

}); // end of click function
var $content = $('.text-container');
$('nav ul a').click(function(e) {
	e.preventDefault();
	var redirect = $(this).attr("href");
		var $previousActive = $('nav').find('.active-nav-link');

		e.preventDefault();

        // if active, don't do anything...if not active, change the page and spin da logo
        if ($(this).hasClass('active-nav-link')){
        	//console.log('already active');
        } else {
        	//console.log('new page');
        	//spinLogo();
    
        	$content.css("opacity", 0);
        	$previousActive.removeClass('active-nav-link');
        	$(this).not( ".homeLink, .std-btn" ).addClass('active-nav-link');
        	setTimeout(function(){
        		toggleNavElements();
        	},800);
        	setTimeout(function(){
        		document.location.href = redirect;
        	},2000);
        }
});


// blog 

// reposition header img
var $headingImg = $('.blog-heading-img');
$headingImg.each(function(i) { 
		    var el=$(this);
		    var container = el.parents('article');
		    console.log(container);
		    el.prependTo(container);
		});

// work section

var $projectView = $(".project-view");
$projectView.each(function(i) { 
		    var el=$(this);
		    var contaienrH = el.innerHeight();
		    var contentTitleH = el.find('.project-title').innerHeight();
		    var $title = el.find('.project-title');
		    $title.css('top', ((contaienrH - contentTitleH)/2) + "px");
		    console.log('done');

		});


}); // end of ready function