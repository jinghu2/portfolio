$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

/*
$(window).scroll(function(){
    $(".home-project").css("opacity", 1 - $(window).scrollTop() / 250);
  });
*/

/* FadeIn Scroll */
$(document).ready(function() {
    
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.home-project').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window + 300 > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
            }
            
        }); 
    
    });
    
});

$(document).ready(function() {
    
    /* Every time the window is scrolled ... */

    
        /* Check the location of each desired element */
        $('.home-project').each( function(i){
            
            var bottom_of_object = $(this).position().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window + 300 > bottom_of_object ){
                
                $(this).animate({'opacity':'1'},1500);
            }
            
        }); 
    

    
});