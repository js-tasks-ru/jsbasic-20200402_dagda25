/**
 * checkSpam
 * @param {string} str base
 * @returns {boolean}
 */
function checkSpam(str) {
  let newString = str.toLowerCase();
  if (newString.indexOf('xxx') === -1 && newString.indexOf('1xbet') === -1) {
    return false;
  }
  return true;
}
