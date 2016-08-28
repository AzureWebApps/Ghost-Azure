(function($){
  $(function(){

    $('.button-collapse').sideNav({
        menuWidth: 350, 
        }
    );
        
  }); 
})(jQuery); 

$(document).ready(function() {
      
var $animation_elements = $('.card-front');
var $window = $(window);

function check_if_in_view() {
  var window_height = $window.height();
  var window_top_position = $window.scrollTop();
  var window_bottom_position = (window_top_position + window_height);
 
  $.each($animation_elements, function() {
    var $element = $(this);
    var element_height = $element.outerHeight();
    var element_top_position = $element.offset().top;
    var element_bottom_position = (element_top_position + element_height);
 
    //check to see if this current container is within viewport
    if ((element_bottom_position >= window_top_position) &&
        (element_top_position <= window_bottom_position)) {
      $element.addClass('fadeInUp');
    } 
  });
}

$window.on('scroll resize', check_if_in_view);
$window.trigger('scroll');
    
        var intents = document.querySelectorAll('.intent');
    if (intents.length) {
      console.log('intents');
      intents = Array.prototype.slice.call(intents);
      intents.forEach(function(link) {
        var url    = link.href;
        var width  = link.dataset.width  || 500;
        var height = link.dataset.height || 500;

        link.addEventListener('click', function(e) {
          e.preventDefault();
          window.open(url, 'share-popup', 'width='+width+',height='+height);
          return false;
        });
      });
    }
  
});
