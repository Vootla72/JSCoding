function countOfVowels(str) {
  const Vowels = ['a', 'e', 'i', 'o', 'u'];
  var count = 0;
  for (var ele of str) {
    if (Vowels.includes(ele.toLowerCase())) count++;
  }
  return count;
}

console.log(countOfVowels('bhavana'));

//using reduce method
function getVowelsCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str
    .split('')
    .reduce(
      (prev, ch, idx) => (vowels.includes(ch.toLowerCase()) ? prev + 1 : prev),
      0
    );
}
