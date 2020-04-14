/**
 * @param {string} str
 * @returns {string}
 */
function camelize(str) {
  return str.split("-")
  .map(function(elem, index){
    if (index > 0) {
      return elem[0].toUpperCase() + elem.slice(1);
    }
    return elem;
  })
  .join("");
}
