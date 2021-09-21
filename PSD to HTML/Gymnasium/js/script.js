$(function () {
	"use strict";

	//Banner slider
	$("#banner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});

	//venobox
	$(".venobox").venobox();

	//Testimonial slider
	$(".text_slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});

	//counter
	$('.counter_up').counterUp({
		delay: 10,
		time: 1000
	});

	//brand slider
	$(".brand_slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
		arrows: true,
		nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
    	prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
		dots: false,
	});
});
