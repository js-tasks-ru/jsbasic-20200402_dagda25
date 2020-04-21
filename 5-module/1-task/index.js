function hideSelf() {
  let button = document.querySelector(".hide-self-button");
  button.addEventListener("click", hide);
  function hide(event) {
    event.target.hidden = true;
  }
}
