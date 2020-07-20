var slideIndex = [];
showSlides(1);

function plusSlides(n, slideshowIndex = 0) {
  slideIndex[slideshowIndex] += n
  showSlides(slideIndex[slideshowIndex], slideshowIndex);
}


function showSlides(n, slideshowIndex = null) {
  var i, j;
  var slideshows = $(".slideshow-container");

  if (slideshowIndex != null) {
    var slides = $(slideshows[slideshowIndex]).find(".mySlides");
    if (n > slides.length) {slideIndex[slideshowIndex] = 1}
    if (n < 1) {slideIndex[slideshowIndex] = slides.length}
    for (j = 0; j < slides.length; j++) {
        $(slides[j]).attr('style', 'display: none');
    }
    $(slides[slideIndex[slideshowIndex]-1]).attr('style', 'display: block');
  } else {
    for (i = 0; i < slideshows.length; i++) {
      slideIndex.push(n);
      var slides = $(slideshows[i]).find(".mySlides");
      for (j = 0; j < slides.length; j++) {
          $(slides[j]).attr('style', 'display: none');
      }
      $(slides[0]).attr('style', 'display: block');
    }
  }

}
