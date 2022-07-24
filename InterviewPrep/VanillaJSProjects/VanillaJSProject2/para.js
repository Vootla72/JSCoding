import { userList } from './app.js';
document.querySelector('#user-list-result').addEventListener('click', (e) => {
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
    userList.classList.add('short');
  }
});
