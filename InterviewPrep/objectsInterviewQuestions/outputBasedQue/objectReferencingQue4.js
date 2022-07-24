function changeAgeAndReference(person) {
  (person.age = 25),
    //   here we are reassigning this, so it will not effect the reference
    (person = {
      name: 'John',
      age: 50,
    });
  return person;
}

const personObj1 = {
  name: 'vootla',
  age: 24,
};

const personObj2 = changeAgeAndReference(personObj1);
console.log(personObj1); //o/p:{name: 'vootla', age: 25}
console.log(personObj2); //o/p:{name: 'John', age: 50}
