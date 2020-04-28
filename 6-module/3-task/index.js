//import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.elem = document.createElement('div');
    this.elem.classList.add("carousel");
    this.render(slides);
    this.elem.querySelector(".carousel__button").addEventListener("click", function(event) {
      event.target.closest(".carousel").dispatchEvent(new CustomEvent("product-add", { 
        detail: slides[0].id, 
        bubbles: true 
      }))
    });
    let carousel = this.elem.querySelector(".carousel__inner");
    let rightArrow = this.elem.querySelector(".carousel__arrow_right");
    let leftArrow = this.elem.querySelector(".carousel__arrow_left");
    //let slideWidth = 500;slidesCollection[0].offsetWidth;
    let currentSlide = 1;
    let rotateIndex = 0;
    leftArrow.style.display = "none";

    rightArrow.addEventListener("click", rotateRight);
    function rotateRight(event){
      let slide= document.querySelector(".carousel__slide");
      rotateIndex = rotateIndex - slide.offsetWidth;
      carousel.style.transform = `translateX(${rotateIndex}px)`;
      currentSlide++;
      if (currentSlide === slides.length) {
        rightArrow.style.display = "none";
      }
      leftArrow.style.display = "";
    }

    leftArrow.addEventListener("click", rotateLeft);
    function rotateLeft(event){
      let slide= document.querySelector(".carousel__slide");
      rotateIndex = rotateIndex + slide.offsetWidth;
      carousel.style.transform = `translateX(${rotateIndex}px)`;
      currentSlide--;
      if (currentSlide === 1) {
        leftArrow.style.display = "none";
      }
      rightArrow.style.display = "";
    }
  }
  render(slides) {
    const slidesInner = slides.map(function(el){
      return `
      <div class="carousel__slide" data-id="${el.id}">
        <img src="/assets/images/carousel/${el.image}" class="carousel__img" alt="slide">
        <div class="carousel__caption">
          <span class="carousel__price">€${el.price}</span>
          <div class="carousel__title">${el.name}</div>
          <button type="button" class="carousel__button">
            <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
        </div>
      </div>
      `;
    })
    .join("");
    this.elem.innerHTML = `
      <div class="carousel__arrow carousel__arrow_right">
        <img src="/assets/images/icons/angle-icon.svg" alt="icon">
      </div>
      <div class="carousel__arrow carousel__arrow_left">
        <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
      </div>

      <div class="carousel__inner">${slidesInner}</div>
    `
  }
}
