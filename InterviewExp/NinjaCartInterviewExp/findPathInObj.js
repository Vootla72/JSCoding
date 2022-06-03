var obj = {
  a: {
    b: {
      c: 1,
    },
  },
};

obj.findPath = function (path) {
  const keys = path.split('.');
  return keys.reduce((currentPath, key) => {
    console.log(this, currentPath, currentPath[key]);
    return currentPath && currentPath[key];
  }, this);
};

console.log(obj.findPath('a'));
console.log(obj.findPath('a.b'));
console.log(obj.findPath('a.b.c'));
console.log(obj.findPath('a.b.c.d'));

//M-2 ans

// class Obj {
//   constructor() {
//     this.data = {
//       a: {
//         b: {
//           c: 12,
//         },
//       },
//     };
//   }

//   findPath = (str) => {
//     let sol = this.data;
//     for (let key of str.split('.')) {
//       sol = sol[key];
//       if (!sol) {
//         return undefined;
//       }
//     }
//     return JSON.stringify(sol);
//   };
// }

// let obj = new Obj();
// console.log(obj.findPath('a.b.c'));
// console.log(obj.findPath('a.b'));
// console.log(obj.findPath('a.b.d'));
// console.log(obj.findPath('a.c'));
// console.log(obj.findPath('a.b.c.d'));
// console.log(obj.findPath('a.b.c.d.e'));
