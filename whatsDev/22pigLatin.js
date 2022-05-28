//function takes an argument as a string
//take first consonant or cluster consonants and move to the end of the word and add "ay" to item
//if word starts with vowel add "way" to the end
// all are in lowercase

function pigLatin(str) {
  //using regex
  var firstVowel = str.match(/[aeiou]/); //gives fst vowel
  var firstPosition = str.indexOf(firstVowel);
  if (firstPosition > 0) {
    //not the first character is vowel
    //take all the consonants before that and add at the end and add "ay"
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }
  return str + 'way';
}
console.log(pigLatin('consonant'));

//M-2 not using regex

function pigLatin1(str) {
  //using regex

  var firstPosition = findFirstVowelPosition(str);
  if (firstPosition > 0) {
    //not the first character is vowel
    //take all the consonants before that and add at the end and add "ay"
    return str.slice(firstPosition) + str.slice(0, firstPosition) + 'ay';
  }
  return str + 'way';
}
console.log(pigLatin1('consonant'));

function findFirstVowelPosition(str) {
  for (var i = 0; i < str.length; i++) {
    if ('aeiou'.indexOf(str[i]) !== -1) return i;
  }
}
