import createElement from './assets/lib/create-element.js';

export default class Modal {
  constructor() {
    this.elem = document.createElement('div');
    this.elem.classList.add("modal");

    this.render();

    let body = document.querySelector("body");
    let closeButton = this.elem.querySelector(".modal__close");
    closeButton.addEventListener("click", function(){
      let modal = document.querySelector(".modal");
        modal.remove();
        body.classList.remove("is-modal-open");
    });

    document.addEventListener("keydown", function(event){
      let modal = document.querySelector(".modal");
      if (event.code === "Escape") {
        modal.remove();
        body.classList.remove("is-modal-open");
      }
    });
  }

  open() {
    let body = document.querySelector("body");
    let container = body.querySelector(".container");
    container.append(this.elem);
    body.classList.add("is-modal-open");
  }

  render() {
    this.elem.innerHTML = `
      <!--Прозрачная подложка перекрывающая интерфейс-->
      <div class="modal__overlay"></div>

      <div class="modal__inner">
        <div class="modal__header">
          <!--Кнопка закрытия модального окна-->
          <button type="button" class="modal__close">
            <img src="/assets/images/icons/cross-icon.svg" alt="close-icon" />
          </button>

          <h3 class="modal__title">
            Вот сюда нужно добавлять заголовок
          </h3>
        </div>

        <div class="modal__body">
          A сюда нужно добавлять содержимое тела модального окна
        </div>
      </div>
    `
  }

  setTitle(title) {
    let modalTitle = this.elem.querySelector(".modal__title");
    modalTitle.innerHTML = title;

  }

  setBody(node) {
    let modalBody = this.elem.querySelector(".modal__body");
    modalBody.innerHTML = "";
    modalBody.append(node);
  }

  close() {
    let body = document.querySelector("body");
    let modal = document.querySelector(".modal");
    modal.remove();
    body.classList.remove("is-modal-open");
  }

}
