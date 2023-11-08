const { getName, getAge, setName, setAge } = require('./objectUtils');

test('Get person name', () => {
  const person = {
    name: 'John Doe',
    age: 25
  };
  expect(getName(person)).toBe('John Doe');
});

test('Get person age', () => {
  const person = {
    name: 'John Doe',
    age: 25
  };
  expect(getAge(person)).toBe(25);
});

test('Set person name', () => {
  const person = {
    name: 'John Doe',
    age: 25
  };
  setName(person, 'Jane Doe');
  expect(person.name).toBe('Jane Doe');
});

test('Set person age', () => {
  const person = {
    name: 'John Doe',
    age: 25
  };
  setAge(person, 30);
  expect(person.age).toBe(30);
});