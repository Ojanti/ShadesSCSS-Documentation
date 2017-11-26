function shadesEyes() {
	var amplitude = 40; 
	var period = Math.PI / 400;
	var startBalance = 300; 

	$(document).ready(function(e) {

	    //zet startHoogte meteen
	    $(".block").css({
	        "top": startBalance
	    });


	    $(".iris").css({
	        "left":"58%",
	        "top": "65%"

	    });

	    var moveByGapX = 100;
	    var moveByGapY = 60;

	    $(window).mousemove(function(evt) {

	        //Track Mouse Position
	        var mX = evt.pageX - $('.shdHead').offset().left - $('.shdHead').width() / 2;
	        var mY = evt.pageY - $('.shdHead').offset().top - $('.shdHead').height() / 2;

	        var maxMouseX = $(window).width();
	        var maxMouseY = $(window).height();

	        var xF = mX / maxMouseX;
	        var yF = mY / maxMouseY;

	        $(".iris").css({
	            "left": moveByGapX * xF + $(".shdEye").width() / 2,
	            "top": moveByGapY * yF + $(".shdEye").height() / 2

	        });

	    });

	});
}

function stickyEl(){
	$("#sidebar").stick_in_parent({
		offset_top: 20
	});
}


function docNavSidebar(){

	// active link on scroll
	var sections = $('.docStep');
	var nav = $('.docNav');
	var nav_height = nav.outerHeight();
	
	$(window).on('scroll', function () {
	  var cur_pos = $(this).scrollTop();
	  
	  sections.each(function() {
		var top = $(this).offset().top - 50,
			bottom = top + $(this).outerHeight();
		
		if (cur_pos >= top && cur_pos <= bottom-400) {
		  nav.find('a').removeClass('active');
		  sections.removeClass('active');
		  
		  $(this).addClass('active');
		  nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
		}
	  });
	});
	

	//smooth scroll
	function smoothScroller(selector){
		selector.on('click', function () {
		  var $el = $(this);
			var  id = $el.attr('href');
		  
		  $('html, body').animate({
			scrollTop: $(id).offset().top
		  }, 500);
		  return false;
		});
	}
	smoothScroller(nav.find('a'));
	smoothScroller($('.smoothScrollLink'));
}


function scrollTopTopFn() {
    if ($('#back-to-top').length) {
        var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('#back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 500);
        });
    }
}


// DOM dependent fns
function domFnInit(){
	stickyEl();
}

// Immediately Invoked fns
function iIFnInit(){
	shadesEyes();
	docNavSidebar();
}


// DOM dependent executions
$( document ).ready(function() {
    domFnInit();
    scrollTopTopFn();
});


// Immediately Invoked
(function() {
    iIFnInit();
})();