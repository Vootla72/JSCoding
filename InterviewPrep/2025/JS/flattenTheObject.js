const user = {
    name: "Rowdy Coders",
    address: {
      primary: {
        house: "109",
        street: {
          main: 21,
          cross: ["32", "1"],
        },
      },
    },
  };
  
  
  // o/p
  
  // {
  //   user_name: "Rowdy Coders",
  //   user_address_primary_house: "109",
  //   user_address_primary_street_main:21,
  //   user_address_primary_street_cross: ["32", "1"],
  // }
  
  
  
  function flattenObj(obj, prefix='user'){
    
    let res = {};
    
    for(let key in obj){
      const newKey = prefix ? `${prefix}_${key}`: key;
      
      if(typeof obj[key] === "object" && !Array.isArray(obj[key])){
        res = {...res, ...flattenObj(obj[key], newKey)};
      }else {
        res[newKey] = obj[key];
      }
    }
    
    return res;
    
  }
  
  console.log(flattenObj(user))