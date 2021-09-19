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
});
