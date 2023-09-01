const scrollBackButton = document.getElementById('scroll-back');
const scrollNextButton = document.getElementById('scroll-next');
const carousel = document.getElementById('carousel');
const carouselContainer = document.getElementById('carousel-container');

let scrollInterval;
let scrollAmount = 50;
let scrollDirection = 0;

scrollBackButton.addEventListener('touchstart', function (e) {
  e.preventDefault();
  scrollDirection = -1;
  startScroll();
});

scrollNextButton.addEventListener('touchstart', function (e) {
  e.preventDefault();
  scrollDirection = 1;
  startScroll();
});

document.addEventListener('touchend', function () {
  stopScroll();
});

scrollBackButton.addEventListener('click', function () {
  carousel.scrollLeft -= 30;
  carouselContainer.scrollLeft -= 30;
});

scrollBackButton.addEventListener('mousedown', function () {
  scrollDirection = -1;
  startScroll();
});

scrollNextButton.addEventListener('click', function () {
  carousel.scrollLeft += 30;
  carouselContainer.scrollLeft += 30;
});

scrollNextButton.addEventListener('mousedown', function () {
  scrollDirection = 1;
  startScroll();
});

document.addEventListener('mouseup', function () {
  stopScroll();
});

function startScroll() {
  clearInterval(scrollInterval);
  scrollInterval = setInterval(function () {
    if (scrollDirection === -1) {
      carousel.scrollLeft -= scrollAmount;
      carouselContainer.scrollLeft -= scrollAmount;
    } else if (scrollDirection === 1) {
      carousel.scrollLeft += scrollAmount;
      carouselContainer.scrollLeft += scrollAmount;
    }
  }, 100); 
}

function stopScroll() {
  scrollDirection = 0;
  clearInterval(scrollInterval);
}
