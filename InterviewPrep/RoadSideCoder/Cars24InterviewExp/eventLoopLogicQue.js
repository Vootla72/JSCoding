console.log('a');
setTimeout(() => console.log('set'), 0);
Promise.resolve(() => console.log('pro')).then((res) => res());
console.log('b');

//setTimeout is not a part of JS, it is a part of webAPI's  i.e browser, so it goes into "TASK" Queue
//promise also will run after all the code in JS got executed but it stored in microtask Queue or priority Queue

//o/p
// a
// b
// pro
// set

//**************************************** */
//for visualizing microtask and task queue

// https://www.jsv9000.app/

//************************************ */
