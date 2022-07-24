// function getItems(fruitList,...args,favoriteList){
//     return [...fruitList,...args,...favoriteList]
// }
function getItems(fruitList, favoriteFruit, ...args) {
  console.log(args);
  return [...fruitList, ...args, favoriteFruit];
}
console.log(getItems(['banana', 'apple'], 'pear', 'orange'));

//line 1 args is a rest operator which should be at the last parameter
//line 2 args is a spread operator it can be anywhere
