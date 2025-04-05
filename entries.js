const person = {
    firstName : "John",
    lastName  : "Doe",
    age     : 50,
    eyeColor  : "blue"
  };
console.log(person);


// object entries() method returns every key-value pair 
// in an array inside an giant array
const personEntries = Object.entries(person);
console.log(personEntries);