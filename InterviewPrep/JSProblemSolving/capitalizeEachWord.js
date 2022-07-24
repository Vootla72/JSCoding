function capitalize(str) {
  return str
    .split(' ')
    .map((item) => (item = item[0].toUpperCase() + item.slice(1)))
    .join(' ');
}
console.log(capitalize('i am a vootla bhavana'));
