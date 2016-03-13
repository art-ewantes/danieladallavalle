$(document).ready(function() {
var WPWdropMenu = function(){
	var $ = jQuery;
	var dropMenus = $(".wpw-drop-menu-cross");
	
	dropMenus.each(function(){
		var dropMenu = $(this);
		var ulNode = $(">ul", dropMenu);
		var mainItems = $(">li", ulNode);
		mainItems.each(function(){
			var liItem = $(this);
			var aLink = $(">a", liItem);
			var subMenu = $(">ul", liItem);
			if(!subMenu.length){return;}
			aLink.prepend('<i class="submenu-open">+</i>');
			aLink.prepend('<i class="submenu-close">-</i>');
			liItem.addClass("wpw-drop-submenu");
			var submenuHeight = 0;
			aLink.click(function(){
				//init
				if(!submenuHeight){
					liItem.addClass("show-submenu");
					submenuHeight = subMenu.height();
					liItem.removeClass("show-submenu");
					console.log(submenuHeight);
					subMenu.css("height", 0);
					subMenu.addClass("animated-submenu");
				}
				
				if(liItem.hasClass("show-submenu")){
					liItem.removeClass("show-submenu");
					subMenu.css("height", 0);
				} else {
					liItem.addClass("show-submenu");
					console.log(subMenu.height());
					subMenu.css("height", submenuHeight);					
				}
				return false;
			});
		});
		
	});
};
	
	
});

$(window).load(function() { 

});