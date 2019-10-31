$(document).ready(function(){

	var header = $("#header");
	var nav = $("#nav");
	var content = $("#content");
	var section = $(".section")
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
		section.css({marginLeft:'200px'});
		navItems.show();
		socialIcons.show();
	}
	
	function closeNav() {
		nav.width(0);
		section.css({marginLeft:'0px'});
		navItems.hide();
		socialIcons.hide();
	}

	function photoWidth () {

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
		});
	});

	var experimental = [
		{
			src: './assets/images/experimental/00-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/01-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/02-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/03-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/04-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/05-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/06-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/07-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/08-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/09-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/10-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/11-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/12-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/13-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/14-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/15-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/16-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/17-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/18-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/19-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/20-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/21-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/22-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/23-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/24-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/25-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/26-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/27-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/28-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/29-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/30-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/31-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/experimental/32-experimental-robcanfield.JPG',
			title: '2016 Orlando, FL'
		}
	]

	var portraits = [
		{
			src: './assets/images/portraits/01-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/02-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/03-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/04-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/05-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/06-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/07-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/08-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/09-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/10-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/11-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/12-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/13-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/14-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/15-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/16-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/17-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/18-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/19-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/20-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/21-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/22-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/23-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/24-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/25-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/26-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/27-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/28-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/29-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/30-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/31-portraits-robcanfield',
			title: '2016 Orlando, FL'
		},
		{
			src: './assets/images/portraits/32-portraits-robcanfield',
			title: '2016 Orlando, FL'
		}
	]

	$(".subnav").on('click', function(){

		

		
		
	})
			
	
			for (i = 0; i < 33; i++){
	
					$("#photo").append("<img src='" + experimental[i].src + "' alt='" + experimental[i].title + "' style='height: 70%; margin-top: .09%; margin-bottom: .09%'>")
			
				
			}
	
	
	
	// if (pagePosition > contactPosition) {
	// 	$("#contact-nav").css("color", "rgb(0, 0, 200)");
	// }

})	

