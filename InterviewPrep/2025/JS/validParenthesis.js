
const s ='{[}'


////////sol1///////

//if only opening and closing braces present

function checkParenthesis1 (s){
  
  let stack =[];
  let map ={
    ')':'(',
    '}':'{',
    ']':'['
  };
  
  for(let char of s){
    if(char ==='(' || char === '{' || char === '[')
    stack.push(char);
    else if(stack.length===0 || map[char] !== stack.pop())
    return false;
  }
  return stack.length===0;
  
}



// console.log("checkParenthesis1", checkParenthesis1(s));


////////////////sol2/////////

function checkParenthesis(s){
  
  let stack = [];
  
  for(let i=0;i<s.length;i++){
    if(s[i]==='(' || s[i]==='[' || s[i]==='{'){
          stack.push(s[i]);

    }
    else {
      if(stack.length===0) return false;
      const stackTop = stack.pop();
      if(
        (s[i]===')' && stackTop!=='(') ||
        (s[i]==='}' && stackTop!=='{') ||
        (s[i]===']' && stackTop!=='['))

return false;
      
      
    }
  }
  return true;
  
}