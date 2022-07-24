const result = document.getElementById('result');
const filter = document.getElementById('filter');
const listItems = [];
getData();
filter.addEventListener('input', (e) => filterData(e.target.value));
async function getData() {
  //   const res = await fetch('https://randomuser.me/api?results=50');
  const res = await fetch('https://flipkart-email-mock.vercel.app/');
  const { list } = await res.json();
  console.log(list);
  //Clear the results
  result.innerHTML = '';
  list.forEach((user) => {
    // console.log(user);
    const li = document.createElement('li');
    listItems.push(li);
    li.innerHTML = `
    
      <div class="user-info">
      <h4>${user.from.email} </h4>
      <p>${user.subject} </p>
      </div>
      `;
    result.appendChild(li);
  });
}
result.addEventListener('click', (e) => onClick(e.target));
function onClick(item) {
  console.log(item);
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
