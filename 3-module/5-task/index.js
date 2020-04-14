/**
 * Найти min/max в произвольной строке
 * @param   {string} str -  входные данные
 * @returns {{min:number, max:number}}  объект
 */
function getMinMax(str) {
  let arr = str.split(",")
  .join(" ")
  .split(" ")
  .map(function(num){
    return parseFloat(num);
  });

  let min = arr[0];
  let max = arr[0];

  arr.forEach(function(elem, index){
    if (elem < min) {
      min = elem;
    }
    if (elem > max) {
      max = elem;
    }
  })

  let result = {
    min: min,
    max: max
  }
  
  return result;
}
