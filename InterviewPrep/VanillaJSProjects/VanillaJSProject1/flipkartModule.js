// import { fetchAPIData } from './fetchData.js';

//  fetchAPIData(param);
// console.log('emailBody', emailBody);
// import _ from 'lodash';
// import { startCase } from 'lodash';
// import _ from '../lodash.js';
// const _ = require('lodash');

const result = document.getElementById('result');
const filter = document.getElementById('filter');
const buttonSort = document.getElementById('btn');
buttonSort.addEventListener('click', clickButtonSort);
const listItems = [];
let arr = [];
const listData = getData();
filter.addEventListener('input', (e) => filterData(e.target.value));
async function getData() {
  //   const res = await fetch('https://randomuser.me/api?results=50');
  const res = await fetch('https://flipkart-email-mock.vercel.app/');
  const { list } = await res.json();
  // console.log(list);
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
  // console.log(arr);

  //Clear the results
  result.innerHTML = '';

  //   list.forEach((user, index) => {
  //     // console.log(user);
  //     const li = document.createElement('li');
  //     listItems.push(li);
  //     li.innerHTML = `
  //       <div class="user-info">
  //       <h4>${user.from.email} </h4>
  //       <p>${user.subject} </p>
  //       <h1>${user.id}</h1>
  //       </div>
  //       `;
  //     result.appendChild(li);
  //     document.getElementById('result' + `${user.id}`).innerHTML = `${user.id}`;
  //   });
  // }
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

    result.appendChild(li).id = `${list[i].id}`;
    result.appendChild(li);
    // document.getElementById('result' + i).id.innerHTML = `${list[i].id}`;
  }
  return list;
}
result.addEventListener('click', (e) => onClick(e.target));
function onClick(item) {
  // console.log(item);
  item.classList.remove('hide');
}
function filterData(searchTerm) {
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove('hide');
    } else {
      item.classList.add('hide');
    }
  });
}
document.querySelector('#result').addEventListener('click', (e) => {
  fetchAPIData(e.target.id);
  console.log(e.target.id); //e.target will gives us exactly which child element got clicked
  //keeping a checkif target is an li element then only redirect
  // if (e.target.tagName == 'LI') window.location.href = '/' + e.target.id;
  // const emailBody = fetchAPIData(e.target.id);
  // console.log(emailBody.body);
  const elem = document.getElementById('ExpandData');
  async function fetchAPIData(param) {
    //   const res = await fetch('https://randomuser.me/api?results=50');
    const res = await fetch(
      `https://flipkart-email-mock.vercel.app/?id=${param}`
    );
    const data = await res.json();
    console.log(data.body);
    // return data;
    const element = document.createElement('p');
    element.innerHTML = `
    <div class="expand">
    <p>${data.body}</p> 
    </div>
    `;
    elem.appendChild(element);
    result.classList.add('short');
  }
});
console.log(listItems[0]);
const list1 = ['bhavana', 'vootla'];
// console.log(
//   _.sortBy(listItems, [
//     function (o) {
//       return o.from.name;
//     },
//   ])
// );
async function clickButtonSort() {
  // const value = _.sortBy(listItems, [
  //   function (o) {
  //     return o.from.name;
  //   },
  // ]);
  const value = listData.then((data) => {
    return data;
  });
  // const data1 = await listData.json();
  // console.log(
  //   'clocked',
  //   listData.then((data) => console.log('clocked1', data))
  // );
  console.log(value);
}
