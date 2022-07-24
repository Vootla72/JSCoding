function fetchData() {
  //   console.log('START FETCH');
  fetch('https://flipkart-email-mock.vercel.app/')
    .then((response) => {
      if (!response.ok) {
        throw ERROR('Error');
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
      const htmlData = data.list
        .map((user) => {
          function a() {
            var intials = `${user.from.name}`.text().charAt(0);
          }
          a();
          console.log('ii', intials);
          //   var profileImage = $('#profileImage').text(intials);
          return `
          <div class="userClass">
         <span class="idNum">${user.id}</span>
          <p class='profileImg'>${intials}</p> 
          <p>Date:${user.date}</p>
          <p>Name:${user.from.name}</p>
          <p>Email:${user.from.email}</p>
 
          
          </div>`;
        })
        .join('');
      console.log(htmlData);
      document.querySelector('#app').insertAdjacentHTML('afterbegin', htmlData);
      document
        .querySelector('#app')
        .addEventListener('click', (e) => console.log('clicked', e.target));
    })
    .catch((error) => console.log(error));
}
fetchData();
//response.json() to get the body of the response--.returns a promise

//***************************POST DATA ************************/

function postData() {
  //   console.log('START FETCH');
  fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name: 'bhavana', job: 'developer' }),
  })
    .then((response) => {
      if (!response.ok) {
        throw ERROR('Error');
      }

      return response.json();
    })
    .then((data) => {
      console.log(data);
      //   const htmlData = data.list
      //     .map((user) => {
      //       return `
      //         <div class="userClass">
      //         <p><img src='${user.from.name[0]}' alt='${user.from.name}'/></p>
      //         <p>Date:${user.date}</p>
      //         <p>Name:${user.from.name}</p>
      //         <p>Email:${user.from.email}</p>

      //         </div>`;
      //     })
      //     .join('');
      //   console.log(htmlData);
      //   document.querySelector('#app').insertAdjacentHTML('afterbegin', htmlData);
    })
    .catch((error) => console.log(error));
}
postData();
//response.json() to get the body of the response--.returns a promise
{
  /* <p><img src='${user.from.name[0]}' alt=''/></p> */
}
