//we shld add 3 dots at the end of the string and the length of the truncated string shld nt exceed num
// if num<=3 ,then 3 dots doesnt add to the length of the truncated string

function truncateString(str, num) {
  console.log(str.slice(0, 2));
  // console.log(str.splice(1, 2));
  if (num <= 3) return str.slice(0, num) + '...';
  if (num >= str.length) return str;
  return str.slice(0, num - 3) + '...';
}
console.log(truncateString('bhavana vootla Developer', 300));
