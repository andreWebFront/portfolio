$(document).ready(function () {

	//E-mail Ajax Send
	$("form").submit(function () { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function () {
			alert("Thank you!");
			setTimeout(function () {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
$(function () {

	var header = $("#header"),
		introH = $("#intro").innerHeight(),
		scrollOffset = $(window);

	// FIXED HEADER
	checkScroll(scrollOffset);

	$(window).on('scroll', function () {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);

	});

	function checkScroll() {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}

	// SMOOTH SCROLL
	$("[data-scroll]").on('click', function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $(this).data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate({
			scrollTop: blockOffset
		}, 500);

	});

	// MENU ANV TOGGLE
	$("#nav_toggle").on('click', function (event) {
		event.preventDefault();

		$("#nav").toggleClass("active");
	});


});