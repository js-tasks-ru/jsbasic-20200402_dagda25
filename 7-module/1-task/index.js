//import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.elem = document.createElement('div');
    this.elem.classList.add("ribbon");
    this.render(categories);

    let ribbonInner = this.elem.querySelector(".ribbon__inner");
    let leftArrow = this.elem.querySelector(".ribbon__arrow_left");
    let rightArrow = this.elem.querySelector(".ribbon__arrow_right");

    rightArrow.addEventListener("click", rotateRight);
    leftArrow.addEventListener("click", rotateLeft);
    ribbonInner.addEventListener("click", chooseCategory);

    function chooseCategory(event){
      let ribbonElements = ribbonInner.querySelectorAll(".ribbon__item");
      for (let link of ribbonElements) {
        link.classList.remove("ribbon__item_active");
      }
      event.preventDefault();
      event.target.classList.add("ribbon__item_active");

      event.target.closest(".ribbon").dispatchEvent(new CustomEvent('ribbon-select', { 
        detail: event.target.dataset.id, 
        bubbles: true 
      }))
    }

    function rotateRight(event){
      ribbonInner.scrollBy(350, 0);

      if(!leftArrow.classList.contains("ribbon__arrow_visible")) {
        leftArrow.classList.add("ribbon__arrow_visible");
      }

      let scrollWidth = ribbonInner.scrollWidth;
      let scrollLeft = ribbonInner.scrollLeft;
      let clientWidth = ribbonInner.clientWidth;

      let scrollRight = scrollWidth - scrollLeft - clientWidth; 
      if (scrollRight === 0) {
        rightArrow.classList.remove("ribbon__arrow_visible");
      }
    }

    function rotateLeft(event){
      ribbonInner.scrollBy(-350, 0);

      if(!rightArrow.classList.contains("ribbon__arrow_visible")) {
        rightArrow.classList.add("ribbon__arrow_visible");
      }

      let scrollLeft = ribbonInner.scrollLeft;
      if (scrollLeft === 0) {
        leftArrow.classList.remove("ribbon__arrow_visible");
      }
    }
  }

  render(categories){
    let categoriesInner = categories.map(function(el){
      return `
      <a href="#" class="ribbon__item" data-id="${el.id}">${el.name}</a>
      `;
    })
    .join("");
    this.elem.innerHTML = `
    <button class="ribbon__arrow ribbon__arrow_left">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>

    <nav class="ribbon__inner">
      ${categoriesInner}
    </nav>

    <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
      <img src="/assets/images/icons/angle-icon.svg" alt="icon">
    </button>
    `
  }
}
