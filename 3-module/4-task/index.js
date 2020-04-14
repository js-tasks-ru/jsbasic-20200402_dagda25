/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  return data.filter(function(user){
    return user.age <= age;
  })
  .map(function(user){
    return user.name + ", " + user.balance;
  })
  .join("\n");
}
