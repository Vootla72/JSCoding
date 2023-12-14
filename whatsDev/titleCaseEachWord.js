function titleCase(str) {
  var words = str.toLowerCase().split(' '); //split each words --- its an array with words.
  for (var i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1); //first letter changed to upper case and remaining letters of the string attached by using slice;
  }
  return words.join(' '); //by converting array into a string
}

console.log(titleCase('i am Vootla bhavana'));
//o/p:I Am Vootla Bhavana

function titleCase1(str) {
  var titled = str
    .toLowerCase()
    .split(' ')
    .map((ele) => ele[0].toUpperCase() + ele.slice(1));
  return titled.join(' ');
}
console.log(titleCase1('i am vootla bhavana'));





function titleEachWordLast(str) {
  const words = str.split(" ");
  const capitalise = words.map((ele)=>{
    const lastLetter=ele.slice(-1).toUpperCase();
    return ele.slice(0,-1)+lastLetter;
  })
  return capitalise.join(" ");

}


console.log(titleEachWordLast('i am bhavana vootla'))



