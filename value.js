const person = {
    name : 'sodor uddin',
    age : 30,
    married : true,
    profession: 'developer',
    salary : 40000,
    'fav places' : ['sundarban', 'bandarban', 'salban'],
}
console.log(person);

// value update using dot notation
person.age = 35;
console.log(person);

// value update using square brackets notation
person['salary'] = 50000;
person['fav places'] = ['bali', 'pataya', 'dubai'];
console.log(person);

let work = 'profession';
person[work] = 'designer';
console.log(person);

