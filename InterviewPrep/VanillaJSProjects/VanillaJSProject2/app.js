import { myfetch } from './myFetch.js';
const userList = document.getElementById('user-list-result');
const userInput = document.getElementById('input-filter');
userInput.addEventListener('input', (e) => filterData(e.target.value));
const res = myfetch('https://flipkart-email-mock.vercel.app/');
const listItems = [];
let arr = [];
res.then((data) => {
  console.log(data);
  const { list } = data;
  list.forEach((item, i) => {
    const yearFormat = new Date(item.date).toISOString().split('T')[0];
    list[i].date = yearFormat.split('-').reverse().join('/');
  });
  list.forEach((item, i) => {
    // list[i].date = yearFormat.split('-').reverse().join('/');
    const value = list[i].from.name[0];
    // console.log(value);
    arr[i] = value;
  });
  userList.innerHTML = '';
  for (var i = 0; i < list.length; i++) {
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
    <img src="${arr[i]}" alt="${arr[i]}"/>
      <div class="user-info">
      <h4>${list[i].from.email} </h4>
      <p>${list[i].subject} </p>
      <date>${list[i].date}</date>
      </div>
      `;

    userList.appendChild(li).id = `${list[i].id}`;
    userList.appendChild(li);
    // document.getElementById('result' + i).id.innerHTML = `${list[i].id}`;
  }
});

function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
export { userList };
