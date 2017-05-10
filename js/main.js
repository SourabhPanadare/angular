/*------------------------------------------------------Document Ready Function-----------------------------------------*/
$(document).ready(function(){
  AOS.init({
    easing: 'ease-in-out-sine'
  });

  $('.experience-carousel').owlCarousel({
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });

  $('.education-carousel').owlCarousel({
    margin:10,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    },
    nav:true,
    navText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });

});

/*----------------------------------------------------Window Resize Function---------------------------------------------*/

$(window).resize(function(){
  var w = $(window).width();
  var h = $(window).height();



});



/*----------------------------------------------------Window Load Function---------------------------------------------*/

$(window).load(function() {

});



/*----------------------------------------------------Window Scroll Function---------------------------------------------*/

$(window).scroll(function(){

});


/*-------------------------------------Common JS--------------------------------------*/
var w = $(window).width();
var h = $(window).height();

$('.down-arrow').click(function(){
  $('html,body').animate({
    scrollTop: $(window).height()
  },600);
});

$("#mynavbar a").on('click', function(event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function(){

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    }  // End if
  });

  function initMap() {
    var uluru = {lat: 19.0421732, lng: 72.9024986};
    var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: uluru
    });
    var marker = new google.maps.Marker({
    position: uluru,
    map: map
    });
  }
