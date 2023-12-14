fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => response.json()) // its returning the promise which will be used to resolve in the next line
  .then((json) => console.log('json', json));




// fetch('https://jsonplaceholder.typicode.com/todos')
//   .then((response) => { 
//     console.log('first res---', response)
//     return response.json() }) // its returning the promise which will be used to resolve in the next line
//   .then((json) => console.log('json', json));





//   https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28
