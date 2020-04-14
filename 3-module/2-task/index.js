/**
 * @param {number[]} arr
 * @param {number} a
 * @param {number} b
 * @returns {number[]}
 */
function filterRange(arr, a, b) {
  let filtered = arr.filter(function(elem){
    return elem >= a && elem <= b;
  })
  return filtered;
}
