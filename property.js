// access the property of object
const person = {
    name : 'sodor uddin',
    age : 25,
    married : true,
    profession : 'developer',
    salary : 30000,
    'fav places' : ['bandarban', 'sundarban', 'salban'],
}

// property access by dot notation
console.log(person.name);
let work = person.profession;
console.log(work);

// property access by square bracket notation
console.log(person['age']);
console.log(person['fav places']);
let income = person.salary;
console.log(income);
let martialStatus = 'married';
console.log(person[martialStatus]);

