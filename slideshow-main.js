var slideIndexMain = 1;
showSlidesMain(slideIndexMain);

// Next/previous controls
function plusSlidesMain(n) {
  showSlidesMain(slideIndexMain += n);
}

// Thumbnail image controls
function currentSlideMain(n) {
  showSlidesMain(slideIndexMain = n);
}

function showSlidesMain(n) {
  var i;
  var slidesMain = document.getElementsByClassName("mySlidesMain");
  if (n > slidesMain.length) {slideIndexMain = 1} 
  if (n < 1) {slideIndexMain = slidesMain.length}
  for (i = 0; i < slidesMain.length; i++) {
      slidesMain[i].style.display = "none"; 
  }
 
  
  slidesMain[slideIndexMain-1].style.display = "block"; 
 
}