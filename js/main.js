/*------------------------------------------------------Document Ready Function-----------------------------------------*/

$(document).ready(function(){
  var w = $(window).width();
  var h = $(window).height();

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
            items:2
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
            items:2
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


/*-----------------------------------Map JS-----------------------------------------*/
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
