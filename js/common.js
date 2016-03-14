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
	

$("#main-menu .nav-menu>li").each(function(itemIndex){
		var menuItem = $(this);
		var subMenu = $(">.sub-menu", menuItem);
		var subMenuBox = $("<div class='submenu-box'><div class='submenu-box-container'></div></div>");
		var subMenuContainer = $(".submenu-box-container", subMenuBox);
		
		if($(">.sub-menu", menuItem).length){
			menuItem.append('<i class="fa fa-caret-down"></i>');
		}
		
		if(menuItem.hasClass("vertical-menu")){
			subMenuBox.addClass("vertical-menu");
			subMenuBox.css("height", 0);
		}
		
		if(itemIndex && !menuItem.hasClass("mobile-lang")){
			menuItem.before("<li class='menu-line-item'>|</li>");
		}
		
		
		//subMenuBox.addClass("display-none");
		//build breadcrumb
		if(subMenu.length){
			
			mainMenu.after(subMenuBox);
			
			
			//CREATE BREAD
			if( $("ul ul", menuItem).length && (menuItem.hasClass("current-menu-ancestor") || menuItem.hasClass("current-menu-parent")) ){
				var fixedSelected = $("<ul></ul>");
				fixedSelected.addClass("parent-submenu");
				fixedSelected.addClass("parent-submenu-white");
				fixedSelected.removeClass("sub-menu");
				fixedSelected.css("padding-left", "");
				header.append(fixedSelected);
				var submenuTitle = $("<li class='menu-item menu-item-title'></li>");
				//fixedSelected.prepend(submenuTitle);
				submenuTitle.html($(">a", menuItem).html());
				
				function buildBread(currentNode, levelIndex){
					var cMenu = $(">.sub-menu", currentNode);
					if(cMenu.length){
						var getAll = 0;
						var addArrow = 0;
						
						if($(">.current-menu-item", cMenu).length){
							getAll = 1;
						}
						$(">li", cMenu).each(function(ii){
							var lNode = $(this);
							if(getAll || lNode.hasClass("current-menu-item") || lNode.hasClass("current-menu-ancestor") || lNode.hasClass("current-menu-parent")){
								var lItem = $("<li></li>");
								lItem.attr("class", lNode.attr("class"));
								lItem.addClass("bread-item");
								lItem.append($(">a", lNode).clone());
								if(!addArrow && levelIndex){
									fixedSelected.append("<li class='bread-arrow'><i class='fa fa-angle-right'></i></li>");
									addArrow = 1;	
								}
								
								console.log(ii);

								if(getAll && ii > 0){
									fixedSelected.append("<li class='bread-bar'>|</li>");
								}
								
								fixedSelected.append(lItem);
								buildBread(lNode, levelIndex + 1);	
							}
							
							
						});
						
						return 1;
					}
					return 0;
				}
				
				
				buildBread(menuItem, 0);
			}
			
			subMenuContainer.append(subMenu);
			
			//search for line breaks on vertical menus
			
			if($(".break-line", subMenuContainer).length){
				var newUL = 0;
				$("ul", subMenuBox).each(function(itemIndex){
					var currentUl = $(this);
					$("li", currentUl).each(function(itemIndex){
						var subItem = $(this);
						if(subItem.hasClass("break-line")){
							newUL = $("<ul class='sub-menu'></ul>");
							subMenuContainer.append(newUL);
						}
						if(newUL){
							newUL.append(subItem);
						}
					});
				});
				
			}				
			
			subMenuContainer.append("<div class='clear-both'></div>");
			
			var logoHeight = 0;
			
			$(">ul>li", subMenuContainer).last().addClass("last-item-in-line");
			
			function submenuOn(){
				menuItem.addClass("my-submenu-active");
				subMenuBox.removeClass("display-none");
				subMenuBox.addClass("submenu-active");
				
				
				if(subMenuContainer.width() > 500){
					subMenuContainer.addClass("multiple-items");
					console.log("multiple items leftism " + (WPW.cW/2 + " " + subMenuContainer.outerWidth()));
					$(">ul", subMenuContainer).addClass("self-center-menu");
					subMenuContainer.css("left", WPW.cW/2 - $(">ul", subMenuContainer).outerWidth()/2);	
				} else {
					subMenuContainer.css("left", menuItem.offset().left);
				}
				
				subMenuBox.css("height", subMenuContainer.outerHeight(true));
				subMenuBox.css("bottom", -subMenuContainer.outerHeight());
			}
			
			function submenuOff(){
				menuItem.removeClass("my-submenu-active");
				subMenuBox.removeClass("submenu-active");
				subMenuBox.css("bottom", 0);
				subMenuBox.css("height", 0);
			}
			
			var offTimer = 0;
			menuItem.mouseenter( function(){
				clearTimeout(offTimer);
				submenuOn();
			} ).mouseleave( function(){
				offTimer = setTimeout(function(){
					submenuOff();	
				}, 100);
			} );
			

			
			function parseSubSubMenu(targetItem, wasFirst){
				return false;
				if(targetItem.hasClass("current-menu-ancestor")){
					//checkfor submenu
					var subItemMenu = $(">.sub-menu", targetItem).clone();
					if(subItemMenu.length){
						header.append(subItemMenu);
					
						if(wasFirst){
							var submenuTitle = $("<li class='menu-item menu-item-title'></li>");
							subItemMenu.prepend(submenuTitle);
							submenuTitle.html($(">a", targetItem).html() + " <span>&raquo;</span> ");
						}
						
						subItemMenu.addClass("parent-submenu");
						subItemMenu.removeClass("sub-menu");

						$(">li", subItemMenu).each(function(){
							var subItem = $(this);
							//$(">a", subItem).attr("href", $(".menu-item-object-page>a", subItem).first().attr("href"));
							parseSubSubMenu(subItem);				
						});						
					}
				}
			}
		
			
			//check for sub-sub menus
			$(">li", subMenu).each(function(){
				var subItem = $(this);
				//$(">a", subItem).attr("href", $(".menu-item-object-page>a", subItem).first().attr("href"));
				parseSubSubMenu(subItem, 1);				
			});
			
			//manage columns
			var currentSub = subMenu;
			$(">li", subMenu).each(function(){
				var subItem = $(this);
				if(subItem.hasClass("new-column")){
					currentSub = $("<ul class='sub-menu'></ul>");
					subMenu.after(currentSub);
				}
				
				currentSub.append(subItem);
			});
			
		
		
			
			
		}
	});
	
	
	//add colapsable sub sub menus
	$(".submenu-box-container>ul ul").first().each(function(){
		return false;
		var ulNode = $(this);
		var ulItems = $(">li", ulNode);
		ulItems.each(function(){
			var ulItem = $(this);
			if($(">.sub-menu", ulItem).length){
				var subToHide = $(">.sub-menu", ulItem);
				var subBtn = $(">a", ulItem);
				subToHide.slideUp(0);
				subBtn.click(function(){
					subToHide.slideToggle();
					return false;
				});
			} 
		});
		//ulNode.css("border-top", "1px solid red");
	});
	
	
	
	
	$(".parent-submenu").each(function(menuIndex){
		var parentMenu  = $(this);
		if(!menuIndex%2){
			parentMenu.addClass("alternate-menu");
		}
		
		if(parentMenu.html().length< 5){
			parentMenu.remove();
		}
		
		if(parentMenu.hasClass("parent-submenu-white")){
			//parentMenu.removeClass("alternate-menu");
		}
		
	});
	


	$(".parent-submenu .current-menu-ancestor").append("<span class='menu-indicator'></span>")

	
	//disable empty a tags
	$("#header a[href='#']").each(function(){
		var aBtn = $(this);
		aBtn.addClass("disabled-link");
		aBtn.click(function(){
			return false;
		});
	})
	$( document ).ready(function() {
   subMenuBox.mouseenter( function(){
				clearTimeout(offTimer);
				submenuOn();
			} ).mouseleave( function(){
				offTimer = setTimeout(function(){
					submenuOff();	
				}, 300);
			} );
			
			submenuOn();
			setTimeout(function(){
				submenuOff();
			}, 5);
});
				
			
			



