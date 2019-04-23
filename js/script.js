$(document).ready(function(){
	var link = $('.menu-link');
	var link_active = $('.menu-link_actve');
	var menu = $('.menu');
	var nav_link = $('.menu a')//убираем меню по клику на ссылку

	link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
	
	nav_link.click(function(){
		link.toggleClass('menu-link_active');
		menu.toggleClass('menu_active');
	});
});