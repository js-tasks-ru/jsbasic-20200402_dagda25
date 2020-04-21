function initCarousel() {
  let carousel = document.querySelector(".carousel__inner");
  let rightArrow = document.querySelector(".carousel__arrow_right");
  let leftArrow = document.querySelector(".carousel__arrow_left");
  let slides = carousel.querySelectorAll("div.carousel__slide");
  let slideWidth = slides[0].offsetWidth;
  let currentSlide = 1;
  let rotateIndex = 0;
  leftArrow.style.display = "none";

  rightArrow.addEventListener("click", rotateRight);
  function rotateRight(event){
    rotateIndex = rotateIndex - slideWidth;
    carousel.style.transform = `translateX(${rotateIndex}px)`;
    currentSlide++;
    if (currentSlide === slides.length) {
      rightArrow.style.display = "none";
    }
    leftArrow.style.display = "";
  }

  leftArrow.addEventListener("click", rotateLeft);
  function rotateLeft(event){
    rotateIndex = rotateIndex + slideWidth;
    carousel.style.transform = `translateX(${rotateIndex}px)`;
    currentSlide--;
    if (currentSlide === 1) {
      leftArrow.style.display = "none";
    }
    rightArrow.style.display = "";
  }
}
