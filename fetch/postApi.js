fetch('https://jsonplaceholder.typicode.com/todos', {
  method: 'POST',
  body: JSON.stringify({
    userId: 1,
    title: 'clean room',
    completed: false,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
///*************It will return Id */
// /* will return
// {
// “userId”: 1,
// “title”: “clean room”,
// “completed”: false,
// “id”: 201
// }
