// The PATCH method is very similar to the PUT method because it also modifies an existing resource. The difference is that for the PUT method, 
// the request body contains the complete new version, whereas for the PATCH method, the request body only needs to contain the specific changes
//  to the resource, specifically a set of instructions describing how that resource should be changed, and the API service will create a new version
//  according to that instruction.

// PATCH to the resource id = 1
// update that task is completed
fetch('https://jsonplaceholder.typicode.com/todos/1', {
  method: 'PATCH',
  body: JSON.stringify({
    completed: true,
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
“id”: 1,
“title”: “delectus aut autem”,
“completed”: true
}
*/
