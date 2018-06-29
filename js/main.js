$(document).ready( function()
{
	var link = $('.m-menu-link');
	var close = $('.m-menu-link-close');
	var menu = $('.m-menu');
	link.on('click', function(event) {
	event.preventDefault();
	menu.toggleClass('m-menu-active');
});
	close.on('click', function(event){
		event.preventDefault();
		menu.toggleClass('m-menu-active')

	});
});
