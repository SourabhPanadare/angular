$(document).ready(function(){
  $(".category-container").mCustomScrollbar({
    setWidth: false
  });
  $(".category-grid-container").mCustomScrollbar({
    setWidth: false
  });
});

$('.category-card').on('click',function(){
  var categoryName = $(this).data('name');
  $.getJSON("https://www.themealdb.com/api/json/v1/1/filter.php", {c: categoryName}, function(result){
    $('.category-grid-container').mCustomScrollbar("destroy");
    var returnedData = '<div class="row">';
    $.each(result,function(key,item){
      $.each(item,function(innerKey,innerItem){
        returnedData += '<div class="col-lg-4">';
        returnedData += '<a class="card mb-4 text-white category-grid-card" href="/receipe/'+innerItem.idMeal
        +'">';
        returnedData += '<img class="card-img-top" src="'+innerItem.strMealThumb+'" alt="receipes">';
        returnedData += '<div class="overlay"><div class="text">'+innerItem.strMeal+'</div></div>';
        returnedData += '</a></div>'
      });
    });
    returnedData += '</div>';
    $('.category-grid-container').empty().append(returnedData);
    $('.category-grid-container').mCustomScrollbar({
      setWidth: false
    });
  });
});
