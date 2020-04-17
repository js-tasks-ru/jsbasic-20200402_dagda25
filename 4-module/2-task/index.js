/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {
    let trs = Array.from(table.querySelectorAll("tr"));
    trs.forEach(function(el, i){
        let diagonalCell = el.querySelectorAll("td")[i];
        diagonalCell.style.backgroundColor = "red";
    })
}
