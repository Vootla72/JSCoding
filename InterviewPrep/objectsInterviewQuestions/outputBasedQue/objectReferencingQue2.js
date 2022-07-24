let person = {
  name: 'bhavana',
};
const members = [person];
person = null;
console.log(members); //o/p:[0:{name: 'bhavana',}]

///here members will not effect  as we are storing person in members as members[0]
//if we actually change the property then it will effect i.e.person.name=null then the o/person
// is {name:null}
