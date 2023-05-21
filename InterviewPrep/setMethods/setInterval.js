// The setInterval() method calls a function at specified intervals (in milliseconds).

// The setInterval() method continues calling the function until clearInterval() is called, or the window is closed.

//To execute a function only once,use setTimeout() method

// To clear an interval, use the id returned from setInterval()
//Then you can to stop the execution by calling clearInterval(id);

//******************Syntax**********//
// setInterval(function, milliseconds, param1, param2, ...)
// function -- mandatory
// milliseconds -- mandatory
//params1,params2 --- Additional params to send to the function --optional

// const testFn = () => {
//     console.log("testing setInterval");
//   };
//   let intervalId = setInterval(testFn, 2000);

//   console.log("intervalId", intervalId);

//   setTimeout((intervalId) => {
//     console.log("in time", intervalId);
//     clearInterval(intervalId);
//   }, 4000);

//The issue with this code is that the intervalId variable is being passed as an argument to the setTimeout callback function, which creates a new variable with the same name intervalId. This new variable inside the setTimeout function is local to that function, and it shadows the outer intervalId variable, making it inaccessible within the setTimeout function.

//Therefore, when clearInterval(intervalId) is called inside the setTimeout function, it is actually trying to clear the wrong interval ID, which would not have any effect on the original interval that was set up.

const testFn = () => {
  console.log("testing setInterval");
};
let intervalId = setInterval(testFn, 2000);

console.log("intervalId", intervalId);

setTimeout(() => {
  console.log("in time", intervalId);
  clearInterval(intervalId);
}, 4000);
