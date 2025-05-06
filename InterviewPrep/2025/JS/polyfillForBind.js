Function.prototype.myBind = function(context, ...args){
  
    let fn = this;
    return function(...newArgs){
      fn.apply(context, [...args, ... newArgs])
    }
    
  }
  
  // Base function
  function greet(greeting, punctuation){
    console.log(greeting +' ' + this.name + punctuation);
  }
  // obj to be passed to myBind
  const person = {
    name: 'bhavana'
  }
  // usage
  const myBind1 = greet.myBind(person,'Hi');
  myBind1('!')