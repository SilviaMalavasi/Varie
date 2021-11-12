// Video play visible //


$(function() {

function isInView(elem){
  return ($(elem).offset().top - $(window).scrollTop() < $(elem).height() || $(elem).offset().bottom - $(window).scrollTop() < 0 );
}

$('video').each(function (index, elem) {
  var played = false;
    $(window).scroll(function() {
      if (isInView(elem) && !played) {
          played = true;
          elem.play();
      };
      if (!isInView(elem) && played) {
          played = false;
      };
  })
});

}); 