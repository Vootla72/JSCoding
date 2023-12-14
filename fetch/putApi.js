// PUT to the resource with id = 5 to change the name of task
fetch('https://jsonplaceholder.typicode.com/todos/5', {
  method: 'PUT',
  body: JSON.stringify({
    userId: 1,
    id: 5,
    title: 'hello task',
    completed: false,
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
/* will return
{
“userId”: 1,
“id”: 5,
“title”: “hello task”,
“completed”: false
}
*/


// POST" is typically used for creating new resources, while "PUT" is used for updating or replacing existing resources.