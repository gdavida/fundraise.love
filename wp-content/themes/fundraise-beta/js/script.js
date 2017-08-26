$(window).load(function() {
		$(".loading-screen").fadeOut("slow");
	});

$(document).ready(function(){

		// (function($) {

		  /**
		   * Copyright 2012, Digital Fusion
		   * Licensed under the MIT license.
		   * http://teamdf.com/jquery-plugins/license/
		   *
		   * @author Sam Sehnert
		   * @desc A small plugin that checks whether elements are within
		   *     the user visible viewport of a web browser.
		   *     only accounts for vertical position, not horizontal.
		   */

	// 	  $.fn.visible = function(partial) {
		    
	// 	      var $t            = $(this),
	// 	          $w            = $(window),
	// 	          viewTop       = $w.scrollTop(),
	// 	          viewBottom    = viewTop + $w.height(),
	// 	          _top          = $t.offset().top,
	// 	          _bottom       = _top + $t.height(),
	// 	          compareTop    = partial === true ? _bottom : _top,
	// 	          compareBottom = partial === true ? _top : _bottom;
		    
	// 	    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));

	// 	  };
		    
	// 	})(jQuery);

	// var win = $(window);
	// var allMods = $("article");

	// Already visible modules


	// win.scroll(function(event) {
	// 	var home = $("#home");
	// 	var about = $("#about");
	// 	var clubs = $("#clubs");
	// 	var faq = $("#faq");

	// 	if (home.visible(true)===true) {
	//       $(".home").addClass("come-in");
	//     } 
	//     if (home.visible()===false) {
	//       $(".home").removeClass("come-in"); 
	//     }

	// 	if (about.visible(true)===true) {
	//       $(".about").addClass("come-in");
	//     } 
	//     if (about.visible()===false) {
	//       $(".about").removeClass("come-in"); 
	//     }

	// 	if (clubs.visible(true)===true) {
	//       $(".clubs").addClass("come-in");
	//     } 
	//     if (clubs.visible()===false) {
	//       $(".clubs").removeClass("come-in"); 
	//     }

	// 	if (faq.visible(true)===true) {
	//       $(".faq").addClass("come-in");
	//     } 
	//     if (faq.visible()===false) {
	//       $(".faq").removeClass("come-in"); 
	//     }
	  
	// });

	//if you want this to work in IE8/9 youll need to polyfill these
	(function(){
		var d = document,
		accordionToggles = d.querySelectorAll('.js-accordionTrigger'),
		setAria,
		setAccordionAria,
		switchAccordion,
	  touchSupported = ('ontouchstart' in window),
	  pointerSupported = ('pointerdown' in window);
	  
	  skipClickDelay = function(e){
	    e.preventDefault();
	    e.target.click();
	  }

			setAriaAttr = function(el, ariaType, newProperty){
			el.setAttribute(ariaType, newProperty);
		};
		setAccordionAria = function(el1, el2, expanded){
			switch(expanded) {
	      case "true":
	      	setAriaAttr(el1, 'aria-expanded', 'true');
	      	setAriaAttr(el2, 'aria-hidden', 'false');
	      	break;
	      case "false":
	      	setAriaAttr(el1, 'aria-expanded', 'false');
	      	setAriaAttr(el2, 'aria-hidden', 'true');
	      	break;
	      default:
					break;
			}
		};
	//function
	switchAccordion = function(e) {
	  console.log("triggered");
		e.preventDefault();
		var thisAnswer = e.target.parentNode.nextElementSibling;
		var thisQuestion = e.target;
		if(thisAnswer.classList.contains('is-collapsed')) {
			setAccordionAria(thisQuestion, thisAnswer, 'true');
		} else {
			setAccordionAria(thisQuestion, thisAnswer, 'false');
		}
	  	thisQuestion.classList.toggle('is-collapsed');
	  	thisQuestion.classList.toggle('is-expanded');
			thisAnswer.classList.toggle('is-collapsed');
			thisAnswer.classList.toggle('is-expanded');
	 	
	  	thisAnswer.classList.toggle('animateIn');
		};
		for (var i=0,len=accordionToggles.length; i<len; i++) {
			if(touchSupported) {
	      accordionToggles[i].addEventListener('touchstart', skipClickDelay, false);
	    }
	    if(pointerSupported){
	      accordionToggles[i].addEventListener('pointerdown', skipClickDelay, false);
	    }
	    accordionToggles[i].addEventListener('click', switchAccordion, false);
	  }
	})();


	$('.hamburger').click(function(){
		$('.mobile-menu').slideToggle();
	})

		var $window = $(window);
		  $window.on('resize', function (){
	        if ($window.width() > 800)
	        {
	            $('.mobile-menu').hide();
	        }
	    });

	$('#gwcTurbine-app-expand').click(function(){
		$('#gwcTurbine-app').slideToggle();
	})

	$('#vol-app-expand').click(function(){
		$('#vol-app').slideToggle();
	})	

		$('a').smoothScroll({offset: 10});


  function myFunction(clickedId) {
    var thisitem = clickedId;
  	var listItems = document.getElementsByClassName("how-to-help-btn");
  	for (var i = 0; i < listItems.length; i++) {
      listItems[i].classList.remove("show");
      listItems[i].classList.add("hidden");
  	}
    document.getElementById(thisitem).classList.remove("hidden");
    document.getElementById(thisitem).classList.add("show");
  }

    $(".how-to-help-btn").click(function(){
    		document.getElementByClass('how-to-help-btn').removeClass('visible');
        $(this).addClass("visible");
    });
		
});