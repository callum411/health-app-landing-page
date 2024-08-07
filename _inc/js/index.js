function ScrollTo(n, offset = 0) {
	$('html, body').animate({
		scrollTop: $(n).offset().top - offset
	}, 2000);
}

$(document).ready(function () {
    $("body").on("click", ".scroll-down", function (e) {
        e.preventDefault();

        ScrollTo($(this).attr("data-target"));
    });
});