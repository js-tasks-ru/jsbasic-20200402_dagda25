/**
 * @param   {{ name: string, age: number }[]} users
 * @returns {string[]}  объект
 */
function namify(users) {
  let names = users.map(function(user){
    return user.name;
  })
  return names;
}
