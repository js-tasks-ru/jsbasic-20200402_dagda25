function toggleText() {
  let button = document.querySelector(".toggle-text-button");
  let text = document.querySelector("#text");
  button.addEventListener("click", toggle);
  function toggle(event) {
    text.hidden = !text.hidden;
  }
}
