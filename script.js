const header = document.querySelector('.scrolling-nav');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header.style.backgroundColor = 'rgba(38, 35, 199, 0.897)';

  } else {
    header.style.backgroundColor = 'transparent';
  }
});
const header2 = document.querySelector('.scrolling-nav2');

document.addEventListener('scroll', () => {
  var scroll_position = window.scrollY;
  if (scroll_position > 250) {
    header2.style.backgroundColor = '#2541B2';
  } else {
    header2.style.backgroundColor = 'transparent';
  }
});

var slideIndex = 0;

showSlidesBlogs();

function showSlidesBlogs() {

  var slides = document.getElementsByClassName("slideset-classes"); // [slideset,slideset,slideset]
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;

  if (slideIndex > slides.length) {
    { slideIndex = 1 }
  }

  slides[slideIndex - 1].style.display = "flex";
  setTimeout(showSlidesBlogs, 5000);
}