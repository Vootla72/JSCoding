function debounce(func, delay){
  let timerId;
  return function(...args){
    clearTimeout(timerId);
    // everytime this function calls we have to reset the timer and the debounce will start from there
    timerId= setTimeout(()=>{
      console.log("*******", this)
      func.apply(this,args);
    },delay)
  }
}


const func1 = () => {
console.log("bhavanaa")
}
console.log(debounce(func1,0))



// Why Clear the Timeout Each Time?
// Debouncing Means Waiting Until "Quiet": The debounce function is meant to delay execution until the function hasn’t been called for a certain period of time. If we didn't clear the timeout, it would execute the function every delay milliseconds, even if there was continuous activity, which is more like throttling than debouncing.

// Resetting the Timer: By clearing the timeout each time the function is called, we ensure that we’re always restarting the delay countdown from the last invocation. This means the function will only execute after the delay has passed with no further calls.

// Here’s a Timeline to Illustrate:
// Suppose you have a delay of 500ms:

// 1st call at t=0ms: The debounce timer starts. The function will execute at t=500ms if no other calls are made.
// 2nd call at t=300ms: The debounce timer is reset. Now, the function is scheduled to run at t=800ms (500ms from now).
// 3rd call at t=600ms: The debounce timer is reset again. The function will now execute at t=1100ms if no further calls are made.
// By clearing the timeout on each call, you prevent the function from running until there’s a pause in the calls that lasts the full duration of the delay.

// Without clearTimeout
// If you didn’t clear the timeout, the function would run every delay milliseconds regardless of whether more calls were still coming in, which doesn’t give you the "debounced" behavior.


/////////////////sol/////////////////////

const debounceFn =(fn,delay) => {
  let timer;
  return function(...args){
      clearTimeout(timer);
      timer = setTimeout(()=> {
          fn.apply(this,args)

      }, delay)
  }
}

const logMessage = (message) => {
  console.log("log message console", message);
}

const debounceLog = debounceFn(logMessage,1000);
debounceLog("Hello")


///////////o/p///////////
// output will be "log message console", Hello