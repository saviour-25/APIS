jQuery(function($){

	// for hover dropdown menu
  	$('ul.nav li.dropdown').hover(function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(200);
    }, function() {
      $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(200);
    });

	$('.progress .progress-bar').progressbar({
		display_text: 'center', percent_format: function(p) {return p + ' %';}});

		
	/* ----------------------------------------------------------- */
	/*  7. MAIN SLIDER (SLICK SLIDER)
	/* ----------------------------------------------------------- */
	jQuery('.main-slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	autoplay: true,
	accessibility: false,
	fade: true,
	cssEase: 'linear'
	});


	jQuery('.counter').counterUp({
	delay: 10,
	time: 1000
	});


	$(window).scroll(function(){
	if ($(this).scrollTop() > 300) {
	$('.scrollToTop').fadeIn();
	} else {
	$('.scrollToTop').fadeOut();
	}
	});	   


	$('.scrollToTop').click(function(){
	$('html, body').animate({scrollTop : 0},800);
	return false;
	});


	jQuery(window).load(function() { // makes sure the whole site is loaded
	$('#status').fadeOut(); // will first fade out the loading animation
	$('#preloader').delay(100).fadeOut('slow'); // will fade out the white DIV that covers the website.
	$('body').delay(100).css({'overflow':'visible'});
	})


	wow = new WOW(
	{
	animateClass: 'animated',
	offset:       100,
	live:         true,
	callback:     function(box) {
	console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
	}
	}
	);
	wow.init(); 
	});