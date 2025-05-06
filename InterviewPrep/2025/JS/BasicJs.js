function perfom() {
    console.log(result);
    var result =100
  }
  
  perfom() // o/p: undefined

  function perfom() {
    result=100;
    console.log(result);
    var result 
  }
  
  perfom() // o/p: 100