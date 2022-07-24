const str = '()))';
const balanceParanthesis = (str) => {
  let paren = [];
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      paren.push(str[i]);
    } else if (str[i] === ')') {
      if (paren[paren.length - 1] === '(') {
        paren.pop();
      } else {
        paren.push('#');
      }
    }
  }
  return paren.length;
};
console.log(balanceParanthesis(str));
