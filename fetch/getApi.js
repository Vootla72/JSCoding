fetch('https://jsonplaceholder.typicode.com/todos')
  .then((response) => {
    response.json();
  })
  .then((json) => console.log(json));

//   https://medium.com/@9cv9official/what-are-get-post-put-patch-delete-a-walkthrough-with-javascripts-fetch-api-17be31755d28
