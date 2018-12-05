/***************************** Scroll button ***************************/
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

/***************************** Fade-in ********************************/
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

/************************** Play page - anchor **************************/
function scrollNav() {
  $('.nav a').click(function(){  
    //Toggle Class
    $(".active").removeClass("active");      
    $(this).closest('li').addClass("active");
    var theClass = $(this).attr("class");
    $('.'+theClass).parent('li').addClass('active');
    //Animate
    $('html, body').stop().animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 160
    }, 400);
    return false;
  });
  $('.scrollTop a').scrollTop();
}
scrollNav();


/************** Detail page lides show ***************/
/********** Reference for W3school ********/
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo1");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
    
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
    
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function chooseColor(n, colorText) {
    currentSlide(n);
    document.getElementById("colorDescrip").innerHTML = colorText;
}

function turnOpaque (dot) {
    dot.style.opacity = "0.5";
}

function turnClear (dot) {
    dot.style.opacity = "1";
}