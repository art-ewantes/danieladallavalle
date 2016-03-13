//header_resize_script
//footer begin
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
//footer end
$(".wpw-drop-submenu a").onClick = WPWdropMenu();


( function( window ) {

'use strict';

// class helper functions from bonzo https://github.com/ded/bonzo

function classReg( className ) {
  return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
}

// classList support for class management
// altho to be fair, the api sucks because it won't accept multiple classes at once
var hasClass, addClass, removeClass;

if ( 'classList' in document.documentElement ) {
  hasClass = function( elem, c ) {
    return elem.classList.contains( c );
  };
  addClass = function( elem, c ) {
    elem.classList.add( c );
  };
  removeClass = function( elem, c ) {
    elem.classList.remove( c );
  };
}
else {
  hasClass = function( elem, c ) {
    return classReg( c ).test( elem.className );
  };
  addClass = function( elem, c ) {
    if ( !hasClass( elem, c ) ) {
      elem.className = elem.className + ' ' + c;
    }
  };
  removeClass = function( elem, c ) {
    elem.className = elem.className.replace( classReg( c ), ' ' );
  };
}

function toggleClass( elem, c ) {
  var fn = hasClass( elem, c ) ? removeClass : addClass;
  fn( elem, c );
}

var classie = {
  // full names
  hasClass: hasClass,
  addClass: addClass,
  removeClass: removeClass,
  toggleClass: toggleClass,
  // short names
  has: hasClass,
  add: addClass,
  remove: removeClass,
  toggle: toggleClass
};

// transport
if ( typeof define === 'function' && define.amd ) {
  // AMD
  define( classie );
} else {
  // browser global
  window.classie = classie;
}

})( window );

//header_resize_script
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



 window.onload = init();

	

	function contentMarginTop(){
		headerHeight = $("header").outerHeight(true);

		$("#content").css("margin-top", headerHeight);	
	}
	//header_resize_begin
    function init() {
        window.addEventListener('scroll', function(e){
            var distanceY = window.pageYOffset || document.documentElement.scrollTop,
                shrinkOn = 50,
                header = document.querySelector("header");
            if (distanceY > shrinkOn) {
                classie.add(header,"smaller");
            } else {
                if (classie.has(header,"smaller")) {
                    classie.remove(header,"smaller");
                }
            }
        });
    }
    window.onload = init();
   window.onload = contentMarginTop();

		//header_resize_end
	
});

 // $('').mouseover(function()
$(window).load(function() { 




