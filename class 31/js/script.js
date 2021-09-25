$(function () {
	"use strict";

	//Banner slider
	$("#banner").slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
	});

	//venobox
	$(".venobox").venobox();

	//Team slider
	$(".team_slider").slick({
		slidesToShow: 4,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: false,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//Testimonial slider
	$(".test_slider").slick({
		slidesToShow: 2,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: false,
		dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
			{
				breakpoint: 575.98,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});

	//counter
	$(".counter_up").counterUp({
		delay: 10,
		time: 1000,
	});

	//brand slider
	$(".brand_slider").slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2000,
		arrows: true,
		nextArrow: '<i class="fas fa-chevron-right nextarrow"></i>',
		prevArrow: '<i class="fas fa-chevron-left prevarrow"></i>',
		dots: false,
		centerMode: true,
		centerPadding: 0,
	});
});
