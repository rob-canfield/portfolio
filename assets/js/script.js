var header = $("#header");
var nav = $("#nav");
var content = $("#content");
var menu = $("#open-menu");
var navItems = $("nav");
var socialIcons = $("#social-icons");

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

menu.on('click', function(){
	if (nav.width() === 0) {
		openNav();
	} else {
		closeNav();
	}
});

$(".nav").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top - (header.height());

	$("body, html").animate({
		scrollTop: position
	})
});