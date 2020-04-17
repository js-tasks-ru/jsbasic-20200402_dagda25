/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {
    let trs = Array.from(table.querySelectorAll("tr"));
    trs.forEach(function(el){
        let statusCell = el.querySelector("td:nth-child(4)");
        if (statusCell.dataset.available === "true") {
            el.classList.add("available");
        } else if (statusCell.dataset.available === "false") {
            el.classList.add("unavailable");
        } else {
            el.hidden = true;
        }
        let genderCell = el.querySelector("td:nth-child(3)");
        if (genderCell.textContent === "m") {
            el.classList.add("male");
        } else if (genderCell.textContent === "f") {
            el.classList.add("female");   
        }
        let ageCell = el.querySelector("td:nth-child(2)");
        if (+ageCell.textContent < 18) {
            el.style.textDecoration = "line-through";
        }
    })
}
