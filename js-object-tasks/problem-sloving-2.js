// problem 05
const person = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true,

};

for(let key in person){

    // console.log(key);
    // console.log(person[key]);

    console.log('key : ', key, '| type : ', typeof person[key] );
}