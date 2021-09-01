$(function () {
	// pie bar
	$(".chart").easyPieChart({
		easing: "easeOutBounce",
		onStep: function (from, to, percent) {
			$(this.el).find(".percent").text(Math.round(percent));
		},
	});
	var chart = (window.chart = $(".chart").data("easyPieChart"));
	$(".js_update").on("click", function () {
		chart.update(Math.random() * 100);
	});

	// Filter js start
	var containerEl = document.querySelector(".filter_img");
	var mixer = mixitup(containerEl);

	// Preloader
	$(window).on("load", function () {
		$(".pre_loader").delay(2000).fadeOut();
	});
});
