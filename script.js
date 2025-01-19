const sliderEl = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider__slide");

const btnPrev = document.querySelector(".btn-prev");
const btnNext = document.querySelector(".btn-next");

const moveSlides = function (s) {
  const width = window.innerWidth < 768 ? 285 : 570;
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${width * (i - s + 1)}px)`;
  });
};

let currentSlide = 3;
let maxSlides = slides.length;

btnPrev.addEventListener("click", function () {
  if (currentSlide === 1) {
    currentSlide = maxSlides;
  } else currentSlide--;
  moveSlides(currentSlide);
});

btnNext.addEventListener("click", function () {
  if (currentSlide === maxSlides) {
    currentSlide = 1;
  } else currentSlide++;
  moveSlides(currentSlide);
});

window.addEventListener("resize", function (e) {
  if (e.currentTarget.innerWidth < 768) moveSlides(currentSlide);
  if (e.currentTarget.innerWidth > 767) moveSlides(currentSlide);
});
