$(document).ready(function() {
  var slides = $('.slide');
  var counter = 0;

  $('.slides').css('width',(slides.length * 100) + '%');

  $('#arrow-left').hide();

  $('.arrow-btn').click(function(e) {
    e.target.id === 'arrow-right' ? rotate(1) : rotate(-1);
  });

  function rotate(direction) {
    var distance = -25;

    counter = counter + direction;

    if (counter === 0) {
      $('.slides').css('transform','none');
    } else {
      $('.slides').css('transform','translateX(' + counter * distance + '%)');
    }

    toggleArrow();
  };

  function toggleArrow() {
    if (counter === 0) {
      $('#arrow-left').hide();
    } else if (counter === (slides.length - 1)) {
      $('#arrow-right').hide();
    } else {
      $('.arrow-btn').show();
    }
  };
});
