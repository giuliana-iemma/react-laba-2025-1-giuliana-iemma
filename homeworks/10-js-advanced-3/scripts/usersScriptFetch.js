//Script 1
async function getUsers() {
  const response = await fetch('https://randomuser.me/api/?gender=female&results=10');
  const responseJson = await response.json();
  const users = responseJson.results;

  const container = document.getElementById('users');
  let ul = document.createElement('ul');
  ul.setAttribute('class', 'runners__list');

  users.forEach((user) => {
    console.log(user);

    let li, img, p;
    //List element
    li = document.createElement('li');
    li.setAttribute('class', 'runners__subcontainer');

    //Image
    let dataImage = user.picture.medium;
    console.log(dataImage);

    img = document.createElement('img');
    img.setAttribute('class', 'runners__img');
    img.setAttribute('src', dataImage);

    //Name
    let dataName = user.name.title + ' ' + user.name.first + ' ' + user.name.last;

    p = document.createElement('p');
    p.setAttribute('class', 'runners__name');
    p.innerText = dataName;

    //Build the container
    li.appendChild(img);
    li.appendChild(p);
    ul.appendChild(li);
    container.appendChild(ul);
  });
  console.log(users);
}

getUsers();
