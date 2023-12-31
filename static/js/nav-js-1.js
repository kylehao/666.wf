/* JavaScript code should be executed in "strict mode" */
"use strict";

$(document).ready(function () {
	// Transition effect for navbar 
	$(window).scroll(function () {
		// checks if window is scrolled more than 500px, adds/removes solid class
		if ($(this).scrollTop() > 10) {
			$('.navbar').addClass('solid');
		} else {
			$('.navbar').removeClass('solid');
		}
	});
});