/**
 * Генерация HTML списка друзей
 * @param {Object[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList(friends) {
  let ul = document.createElement('ul');
  friends.forEach(function(el, i) {
    let li = document.createElement('li');
    li.innerHTML = el.firstName + " " + el.lastName;
    ul.append(li);
  });
  return ul;
}

makeFriendsList([
    {
        firstName: 'Artsiom',
        lastName: 'Mezin'
    },
    {
        firstName: 'Ilia',
        lastName: 'Kantor'
    },
    {
        firstName: 'Christopher',
        lastName: 'Michael'
    }
]);
