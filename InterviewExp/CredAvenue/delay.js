// const delay = (mis) => new Promise((res) => setTimeout(res, mis));

const sleep = async (time) => {
  return new Promise((resolve) => setTimeout(resolve, time * 1000));
};

const sayHello = async () => {
  for (let i = 0; i < 5; i++) {
    await sleep(2);
    console.log('Hello there');
  }
};

// sayHello();

async function delay(duration) {
  return new Promise((res) => setTimeout(res, duration));
}

async function printLog() {
  for (let i = 0; i < 5; i++) {
    await delay(1000).then(() => console.log(i));
  }
}
console.log(printLog());
// var array = [1, 2, 3, 4, 5];
// for (let i = 0; i < array.length; i++) {
//   setTimeout(() => {
//     console.log(array[i]);
//   }, 5000);
// }
//o/p 1 2 3 4 5 at a time after 5 seconds

// const timer = ms => new Promise(res => setTimeout(res, ms))

// async function load () { // We need to wrap the loop into an async function for this to work
//   for (var i = 0; i < 3; i++) {
//     console.log(i);
//     await timer(3000); // then the created Promise can be awaited
//   }
// }

// load();
