/*jshint devel:true */

$(document).ready(function(){

	var $bag = $('#bag');
	var $fs = $('#fs');
	var $productPage = $('.product-container');
	var hiddenHeightPay;
	var hiddenHeightShip;

	$productPage.data({
		active: false,
		section: "first"
	});

	// bag or fs click
	$bag.click(function() {
		// console.log( $productPage.data('active') );
		if ($productPage.data('active') === false){
			// open section
			$productPage.velocity({left:'-85%'},{duration:300});
			$productPage.data({
				active: true,
				section: "first"
			});
		} else {
			// close section
			$productPage.velocity({left:0},{duration:300});

			$productPage.data({
				active: false,
				section: "first"
			});
		}

	});

	$fs.click(function() {
		if ($productPage.data('active') === true){
			// close section
			$productPage.velocity({left:'0'},{duration:300});

			$productPage.data({
				active: false,
				section: "first"
			});
		}

	});

	// add new card / address
	$('#checkout-section-1').delegate("#add-new-address", "click", function() {
		var newDiv = $('#new-address');
		newDiv.velocity({left:0},{duration:500});
	});

	$("#back-new-address").click(function() {
		var newDiv = $('#new-address');
		newDiv.velocity({left:'-100%'},{duration:500});
	});

	$('#checkout-section-1').delegate("#add-new-payment", "click", function() {
		var newDiv = $('#new-payment');
		newDiv.velocity({left:0},{duration:500});
	});

	$("#back-new-payment").click(function() {
		var newDiv = $('#new-payment');
		newDiv.velocity({left:'-100%'},{duration:500});
	});

	$("#save-payment").click(function() {
		var newDiv = $('#new-payment');
		var hiddenPayment = $('#checkout-section-1').find('#hidden-payment');
		var parent = $('#checkout-section-1').find('#inside-hidden-payment');
		var mainList = $('#checkout-section-1').find('#payment-list');
		var $expandCross = $('#checkout-section-1').find('#payment-info').children('.expand');
		var currentSection = parent.parent();
		console.log($expandCross);
		newDiv.velocity({left:'-100%'},{duration:500});
		setTimeout(function(){

			hiddenPayment.velocity({height:54},{duration:500});
			parent.find('.active-btn').text('select');
			parent.find('.active-btn').removeClass('active-btn');
			hiddenPayment.find('.right-col-btn p').addClass('active-btn');
			hiddenPayment.find('.right-col-btn p').text('selected');
			var newText = hiddenPayment.find('ul').html();
			mainList.html(newText);


		},500);
		setTimeout(function(){
			$expandCross.data({active:false});
			$expandCross.velocity({rotateZ: "0deg"}, {duration:300});
			currentSection.velocity({height: 0}, {duration:300});
		},1400);
	});

	$("#save-address").click(function() {
		var newDiv = $('#new-address');
		newDiv.velocity({left:'-100%'},{duration:500});
		var hiddenAddress = $('#checkout-section-1').find('#hidden-address');
		var parent = $('#checkout-section-1').find('#inside-hidden-address');
		var mainList = $('#checkout-section-1').find('#address-list');
		var $expandCross = $('#checkout-section-1').find('#shipping-info').children('.expand');
		var currentSection = parent.parent();

		setTimeout(function(){
			hiddenAddress.velocity({height:54},{duration:500});
			parent.find('.active-btn').text('select');
			parent.find('.active-btn').removeClass('active-btn');
			hiddenAddress.find('.right-col-btn p').addClass('active-btn');
			hiddenAddress.find('.right-col-btn p').text('selected');
			var newText = hiddenAddress.find('ul').html();
			mainList.html(newText);
		},500);
		setTimeout(function(){
			$expandCross.data({active:false});
			$expandCross.velocity({rotateZ: "0deg"}, {duration:300});
			currentSection.velocity({height: 0}, {duration:300});
		},1400);
	});

	// remove an item
	$('#checkout-section-1').delegate(".cross", "click", function() {
		var $parentContainer = $(this).parents('.product-in-cart');
		var containerChildren = $parentContainer.find('.product-image, .description');
		var $undo = $parentContainer.find('.undo');
		containerChildren.velocity({opacity:0},{duration:300, display: 'none'});
		setTimeout(function(){
			$undo.velocity({opacity:1},{duration:300});
		},500);

	});

	$('#checkout-section-1').delegate(".undo-btn", "click", function() {
		var $parentContainer = $(this).parents('.product-in-cart');
		var containerChildren = $parentContainer.find('.product-image, .description');
		var $undo = $parentContainer.find('.undo');
		$undo.velocity({opacity:0},{duration:300});
		setTimeout(function(){
			containerChildren.velocity({opacity:1},{duration:300, display: 'block'});
		},500);

	});

// expand section

	$('#checkout-section-1').delegate(".expand", "click", function() {
		var $partner = $(this).parent().find('.expanded-content');
		var $section = $(this).parents('.card').find('.expanded-content');
		//var $parent = $(this).parents('.card');
		var thisID = $section.attr('id');
			//partnerHeight = $partner.find('.inside-hidden').outerHeight(),
		var expandHeight;

			if(thisID === "payment"){
				expandHeight = hiddenHeightPay;
			} else{
				expandHeight = hiddenHeightShip;
			}
			

		if ( $(this).data("active") === false || $(this).data("active") === undefined ){
			$(this).data({
			active:true
		});
			$(this).velocity({rotateZ: "45deg"}, {duration:300});
			$partner.velocity({height: expandHeight}, {duration:300});
		} else{
			$(this).data({
			active:false
		});
			$(this).velocity({rotateZ: "0deg"}, {duration:300});
			$partner.velocity({height: 0}, {duration:300});
		}
		//console.log($(this).data('active'));
	});


	// select new card/address
		

	$('#checkout-section-1').delegate(".info-selection-section .select-btn", "click", function() {
		var $inactive = $(this).find('p');
		var $active = $(this).parents('.inside-hidden').find('.active-btn');
		var $list = $(this).parents('.info-selection-section').find('ul');


		if( $(this).find('p').hasClass('active-btn')){

		} else {

			$active.toggleClass('active-btn');
			$inactive.toggleClass('active-btn');
				$active.text('select');
				$inactive.text('selected');

			var mainList = $(this).parents('.card-section').find('.main-list');
			var parent = $(this).parents('.card-section');
			var currentSection = parent.find('.expanded-content');
			var expandedCross = parent.find('.expand');
			var newText = $list.html();
			mainList.html(newText);

			setTimeout(function(){
				expandedCross.data({active:false});
				expandedCross.velocity({rotateZ: "0deg"}, {duration:300});
				currentSection.velocity({height: 0}, {duration:300});
			},500);
		}
	});


	// ajax loading

		var fadeTime = 500;
		$('#checkout-btn a').on('click', function(e) {
			e.preventDefault();
			var url = this.href;
			$('.checkout-container').fadeOut(fadeTime);
			setTimeout(function(){
				$('#load').remove();                          // Remove old content
			},fadeTime);
			setTimeout(function(){
				$('#ajax-content').load(url + ' #load', function(){
				hiddenHeightPay = $('#ajax-content').find('#payment').outerHeight();
				hiddenHeightShip = $('#ajax-content').find('#shipping').outerHeight();
				// console.log(hiddenHeightPay + " " + hiddenHeightShip);
				$('#ajax-content').find('.expanded-content').velocity({height: 0}, {duration:0});
				}).fadeIn(fadeTime); // New content
				$('#checkout-section-1').velocity({backgroundColor:"#f7f7f7"},{duration:500});

			},fadeTime+100);
	});


	});