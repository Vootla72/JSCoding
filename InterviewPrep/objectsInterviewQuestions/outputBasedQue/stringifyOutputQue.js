const settings = {
  username: 'bhavana',
  level: 19,
  health: 90,
};
const data = JSON.stringify(settings, ['level', 'health']);
console.log(data); //o/p:{"level":19,"health":90}
//when we pass an object with keys needs to be stringify,it will stringify only those properties
