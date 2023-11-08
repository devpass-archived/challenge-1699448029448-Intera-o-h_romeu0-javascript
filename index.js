const { getName, getAge, setName, setAge } = require('./objectUtils');

const person = {
  name: 'John Doe',
  age: 25
};

console.log('Current Name:', getName(person));
console.log('Current Age:', getAge(person));

setName(person, 'Jane Doe');
setAge(person, 30);

console.log('Updated Name:', getName(person));
console.log('Updated Age:', getAge(person));