const a = {};
const b = { key: 'b' };
const c = { key: 'c' };
a[b] = 123; //same as a['[object Object]']
a[c] = 456; //same as a['[object Object]']
console.log(a); //o/p:{[object Object]: 456} as we are not storing a string we are storing an object
console.log(a[b]); //o/p:456 -- 456 replaces 123 as they both pointing to same key
