// print()
// console.log(name)
// function print() {var name = "Dillion"}

// o/p-- undefined
 
 
 
// function currying(a){
//   return function(b){
//     return a + b;
//   }
// }
 
// const z= currying(10);
// const y = z(2);
// console.log(y);

// var a = () => {
  
// }

// const obj = {
//     name: 'deeecode',
//     print: function() {    
//         console.log(this)
//     }
// }
// obj.print()
//o/p: Output:{ name: 'deeecode', print: [Function: print] }


// const obj = {
//     name: 'deeecode',
//     print: () => {    
//         console.log(this)
//     }
// }
// obj.print()
//o/p: global object



// const obj = {
//     name: 'deeecode',
//     print: function() {
//     const print2 = () => {      
//             console.log(this)
//         }
//         print2()
//     }
// }
// obj.print()
//o/p: Output:{ name: 'deeecode', print: [Function: print] }





const arr = [2, 6, 1, 0, 2, 8, 7, 0, 1]



// unique values
// sort it


function getSortArr(arr){
  let n = arr.length;
  let sortRes = [];
  for(let i=0;i<n ; i++){
    for(let j=0;j<=i;j++){
      if(arr[i]<arr[j]){
        sortRes.push(arr[i])
      }
    }
  }
  console.log("sortRes", sortRes)
  return sortRes;
  
}



function findUniqueValues(arr){
  let mp = {};
  let res = [];
  for(let i=0;i<arr.length;i++){
    let num = res.indexOf(arr[i]);
    if(num == -1){
      res.push(arr[i]);
    }
    const sortArr = getSortArr(res);
  }
  return res;
}

  console.log("findUnique", findUniqueValues(arr))



  // get the sequence**********


  setTimeout(() => { 
  console.log(1);
    }, 0)
  
    console.log(2);

    setTimeout(() => {
   console.log(3);
    }, 100);

    Promise.resolve(4).then((val)=>console.log(val)) 

    document.addEventListener("test",(event)=>{console.log("triggered")}) 

    event = new CustomEvent("test"); 

    document.dispatchEvent(event); 
    
    
    //o/p:2 4 3 1
  
  
  //As i m remote.. i want to share the filtered data..
  // we can share by sharing the api with query params
  
  
  // web workers / service workers
  // routing guards
  // create a instance of api..
  // it updated the data of variable a
  // now i m not calling the instannce..
  // wt will be the value of variable -- initialized or updated
  
  
  // subscribe -- same service,.. 1st one didnt get response..
  // 2nd one will trigger -- now i want to cancel the previous api's as i didnt get the response..
  //how to do it






//   Web Workers and Service Workers are an essential part of Frontend System Design Interviews, and often developers mix up their use cases. Reshare with your network so the maximum people can benefit 

// 1️⃣ Service Worker
// Runs in the background, independent of the main thread. Intercepts network requests and caches API responses. Enables offline support and faster page loads

// ✅ Use when:
//  ✔ You need offline functionality (PWA)
//  ✔ You want to cache API responses for faster page loads
//  ✔ You need background sync (push notifications, updates)

// 2️⃣ Web Worker
// Runs in a separate thread (it doesn’t block UI). Used for CPU-intensive tasks like complex calculations. Communicates with the main thread using postMessage()

// ✅ Use when:
//  ✔ Your app performs heavy calculations (e.g., Fibonacci, encryption)
//  ✔ You need real-time data processing (e.g., financial apps, analytics)
//  ✔ You want to keep UI smooth & responsive


 