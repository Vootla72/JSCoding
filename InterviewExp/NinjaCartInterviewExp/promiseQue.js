const promise = () => Promise.resolve('This is resolved!');

function first() {
  promise().then((res) => console.log(res));
  console.log('First');
}
async function second() {
  console.log(await promise());
  console.log('Second');
}
first();
second();

//o/p:
// First
// This is resolved!
// This is resolved! //bcz of await, it will wait till promise gets resolved
// Second
