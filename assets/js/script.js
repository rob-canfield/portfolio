var header = $("#header");
var nav = $("#nav");
var content = $("#content");
var menu = $("#open-menu");
var navItems = $("nav");
var socialIcons = $("#social-icons");
var pagePosition = $("body, html").scrollTop();
var photoPosition = $("#photo").scrollTop();
var webPosition = $("#web").scrollTop();
var aboutPosition = $("#about").scrollTop();
var contactPosition = $("#contact").scrollTop();

function openNav() {
	nav.width("20%");
	content.width("80%");
	navItems.show();
	socialIcons.show();
}

function closeNav() {
	nav.width(0);
	content.width("100%");
	navItems.hide();
	socialIcons.hide();
}

menu.on('click', function(e){
	e.preventDefault();

	if (nav.width() === 0) {
		openNav();
	} else {
		closeNav();
	}
});

$(".nav").click(function(e) {
	e.preventDefault();
	
	var scrollPosition = $($(this).attr("href")).offset().top - (header.height());

	$("body, html").animate({
		scrollTop: scrollPosition
	})
});

// if (pagePosition > contactPosition) {
// 	$("#contact-nav").css("color", "rgb(0, 0, 200)");
// }

