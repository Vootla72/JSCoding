const words = ['cat', 'baby', 'dog', 'rocket', 'dish'];
const str1 = 'sdhajflenircueletrbcjna';
const str2 = 'fouerawhfocnwbefwyt';
var mp = {};
var res = [];

function Match(str, words) {
  for (var i = 0; i < str.length; i++) {
    console.log(mp[str[i]]);
    if (typeof mp[str[i]] == 'undefined') mp[str[i]] = 1;
    else {
      mp[str[i]]++;
    }
  }
  console.log(mp);
  for (var word of words) {
    var c = 0;
    var l = word.length;
    for (var i = 0; i < l; i++) {
      if (mp[word[i]]) {
        c++;
      }
    }
    if (c == l) res.push(word);
  }
  return res;
}
console.log(Match(str1, words));
