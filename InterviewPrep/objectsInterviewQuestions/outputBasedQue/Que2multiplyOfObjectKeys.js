//Que-2--Create a function multiplyByTwo(obj) that multiplies
//all numeric property values by 2

let obj = {
  a: 100,
  b: 200,
  title: 'My Nums',
};
multiplyByTwo(obj);

function multiplyByTwo(obj) {
  for (key in obj) {
    if (typeof obj[key] === 'number') {
      obj[key] = obj[key] * 2;
    }
  }
}
console.log(obj); //o/p:{a: 200, b: 400, title: 'My Nums'}
