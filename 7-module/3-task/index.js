export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this.elem = document.createElement('div');
    this.elem.classList.add("slider");
    this.render({ steps, value });
    let thumb = this.elem.querySelector('.slider__thumb');
    let progress = this.elem.querySelector('.slider__progress');
    let sliderValue = this.elem.querySelector('.slider__value');
    let sliderSteps = this.elem.querySelectorAll('.slider__steps > span');
    this.elem.addEventListener('click', (event) => {
      let left = event.clientX - this.elem.getBoundingClientRect().left;
      let leftRelative = left / this.elem.offsetWidth;
      let segments = steps - 1;
      let approximateValue = leftRelative * segments;
      let value = Math.round(approximateValue);
      let valuePercents = value / segments * 100;
      sliderValue.innerHTML = `${value}`;
      [...sliderSteps].forEach((el) => {
        el.classList.remove('slider__step-active');
      });
      sliderSteps[value].classList.add('slider__step-active');
      thumb.style.left = `${valuePercents}%`;
      progress.style.width = `${valuePercents}%`;

      event.target.closest(".slider").dispatchEvent(new CustomEvent('slider-change', {
        detail: value, 
        bubbles: true 
      }))
    })
  }

  render({ steps, value }){
    let sliderSteps = [];
    for (let i = 0; i < steps; i++) {
      if (i === value) {
        sliderSteps.push(`
        <span class="slider__step-active"></span>
        `);
      } else {
        sliderSteps.push(`
        <span></span>
        `);
      }
    }

    this.elem.innerHTML = `
    <div class="slider__thumb">
      <span class="slider__value">0</span>
    </div>
    <div class="slider__progress"></div>
    <div class="slider__steps">
      ${sliderSteps.join("")}
    </div>
    `
  }
}
