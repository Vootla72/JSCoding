// finction takes two args
//1.array of objects with key value pairs... 2.obj with only one key value pair
// Aim:when obj matches with key value pair in an obj of an array, return the obj

function whatsInName(collection, source) {
  var keys = Object.keys(source); //last..........collecting keys of source array
  return collection.filter(function (obj) {
    for (var key of keys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}
//arrow fn
function whatsInName1(collection, source) {
  var keys = Object.keys(source); //last..........collecting keys of source array
  return collection.filter((obj) => {
    console.log(obj, obj.hasOwnProperty);
    for (var key of keys) {
      if (!obj.hasOwnProperty(key) || obj[key] !== source[key]) {
        return false;
      }
    }
    return true;
  });
}
console.log(
  whatsInName1(
    [
      { first: 'bhavana', last: 'vootla' },
      { first: 'b', last: 'v' },
    ],
    { last: 'vootla' }
  )
);
