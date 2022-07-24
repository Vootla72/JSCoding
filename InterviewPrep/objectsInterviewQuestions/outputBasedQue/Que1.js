const obj = {
  a: 'one',
  b: 'two',
  a: 'three',
};
console.log(obj); //o/p:{a: 'three', b: 'two'}

//Note:if we have same named key then the prev value is replaced by new value and still the key will be in its first position
