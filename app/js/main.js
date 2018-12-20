/*------------------------------------------------------Document Ready Function-----------------------------------------*/
$(document).ready(function(){
  AOS.init({
    easing: 'ease-in-out-sine'
  });


  $('#education-carousel').owlCarousel({
    items : 3,
    itemsDesktopSmall : [1199,3],
    itemsTablet : [767,2],
    itemsMobile: [479,1],
    jsonPath : 'json/carousel.json',
    jsonSuccess : customDataSuccess,
    navigation:true,
    navigationText:["<i class='fa fa-angle-left' aria-hidden='true'></i>","<i class='fa fa-angle-right' aria-hidden='true'></i>"]
  });

  function customDataSuccess(data){

    var content = "";
    for(var i in data["educationinfo"]){

      var date = data["educationinfo"][i].date;
      var course = data["educationinfo"][i].course;
      var institute = data["educationinfo"][i].institute;

      content += '<div class="panel panel-default"><div class="panel-heading bkg-blue"><h4 class="clr-white">'+date+'</h4></div><div class="panel-body bkg-grey"><div class="panel-img"><img class="img-responsive" src="images/education.png" alt="img"/></div></div><div class="panel-footer bkg-blue"><h5 class="clr-white">'+course+'</h5><p class="clr-white">'+institute+'</p></div></div>';
    }
      $("#education-carousel").html(content);
 }


   $.getJSON( "json/data.json", function(data) {
     var content = "";
     $.each(data.aboutinfo, function(key, val){
       content += '<p class="clr-black about-para">'+val.para+'</p>'
    });
    $('#aboutpara').html(content);
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
